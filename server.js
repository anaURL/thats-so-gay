const express = require('express')
const app = express()
const PORT = 8000 
const mongoose = require('mongoose')
const User = require('./models/user')
const passport = require('passport');
const session = require('express-session');
const Microagression = require('./models/microagressions');
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");



require ('dotenv').config()
require("./config/passport")(passport);

mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => {console.log('Connected to database')}
  )

//Set middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))


//// setup Sessions - stored in MongoDB
app.use(require("express-session")({
    secret:"kat cat",
    resave: false,
    saveUninitialized: false
}))
 
  //passport middleware
app.use(passport.initialize());
app.use(passport.session());

//passport middleware
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//passport strategy
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

    
//ROUTES

//GET
app.get('/', (request, response) => {
			response.render("index.ejs")
})

app.get('/examples', async(request, response) => {
    try {
        Microagression.find({}, (err, microagressions) => {
			response.render("examples.ejs", {
				microagressionsList: microagressions});
    }); 
}   catch (err) {
        if (err) return response.status(500).send(err)
}
});  


app.get('/add', async(request, response) => {
    try {
        Microagression.find({}, (err, microagressions) => {
			response.render("add.ejs", {
				microagressionsList: microagressions});
    }); 
}   catch (err) {
        if (err) return response.status(500).send(err)
}
}); 

app.get('/about', (request, response) => {
			response.render("about.ejs") 

}); 
app.get('/resources', (request, response) => {
    response.render("resources.ejs") 

}); 

app.get('/avoid', (request, response) => {
    response.render("avoid.ejs") 

}); 

app.get('/respond', (request, response) => {
    response.render("respond.ejs") 

}); 

app.get('/more-info', (request, response) => {
    response.render("more-info.ejs") 

}); 

app.get("/register", (request, response) => {
    response.render("register.ejs") 
}); 


//POST - ADD
    app.post('/add', async(request,response) => {
        const newMicroagression = new Microagression ( 
            { 
                title: request.body.title, 
                content: request.body.content
            }
        )
        console.log(newMicroagression)
        try {
            await newMicroagression.save() 
            console.log(newMicroagression)
            response.redirect("/examples")
        } catch(err) {
            if (err) return response.status(500).send(err)
            response.redirect('/')
        }
    })

//UPDATE
app
    .route("/edit/:id")
    .get((request,response) => {
        const id = request.params.id 
        Microagression.find({}, (err,microagressions) => {
            response.render('edit.ejs', { 
                microagressionsList:microagressions, 
                idMicroagression:id })
        })
})

    .post((request, response) => {
    const id = request.params.id 
    Microagression.findByIdAndUpdate(
        id,
    {
        title: request.body.title,
        content: request.body.content
    },
    err => {
        if (err) return response.status(500).send(err)
        response.redirect('/')
    }
)
})

//DELETE
// app
//         .route("/remove/:id")
//         . get((request, response) => {
//             const id = request.params.id
//             Microagression.findByIdAndRemove(id, err => {
// 			if (err) return response.status(500).send(err)
// 			response.redirect("/")
// 		})
// 	})


//register 

// handeling user sign up
app.post("/register", (request, response) => {
    // console.log(req.body.username);
    // console.log(req.body.password);
    User.register(new User({username: request.body.username}), request.body.password, function(err, user){
        if(err){
            console.log(err);
            return response.render("/add");
        }
        passport.authenticate("local")(request, response, function(){
            response.redirect("/add");
        });
    });
});

//login

// Login Form
app.get("/login", function(req, res){
    res.render("login");
});

// Login Logic
// middleware
app.post("/login", passport.authenticate("local",{
    successRedirect: "/add",
    failureRedirect: "/login"
}), function(req, res){
    res.render("/add");
});

// Logout
app.get("/logout", function(request, response){
    request.logout();
    response.redirect("/");
});

// check isLoggedIn
function isLoggedIn(request, response, next){
    if(request.isAuthenticated()){
        return next();
    }
    response.redirect("/login");
}

//Start server
app.listen(process.env.PORT || PORT, () => console.log(`Yeah we're running on ${PORT}`))
