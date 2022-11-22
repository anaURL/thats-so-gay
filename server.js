const express = require('express') 
const app = express() 
const PORT = 3000 
const mongoose = require('mongoose') 
const Microagression = require('./models/microagressions') 
require ('dotenv').config() 

//Set middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser: true},
    () => {console.log('Connected to database')}
  )

  app.use("/public", express.static('public')); 

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
    try {response.render("about.ejs") 
 } catch (err) {
    if (err) return response.status(500).send(err)
}
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

app.get('/info', (request, response) => {
    response.render("info.ejs") 

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
            response.redirect('/examples')
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


.post ((request, response) => { 
    const id = request.params.id 
    Microagression.findByIdAndUpdate ( //Finds a matching document, updates it according to the update arg, and returns the found document 
    //(if any) to the callback. The query executes if callback is passed.
        id,  //ID ARGUMENT
        {
            title:request.body.title,        //UPDATE ARGUMENT
            content: request.body.content

        },
        err => { //ERR argument
            if (err) console.log(error) //check the error 500 
            response.redirect('/')
        })
})

//DELETE
// app
//         .route("/remove/:id") 
//         . get((request, response) => {
//             const id = request.params.id //assigning query id to a id variable
//             Microagression.findByIdAndRemove(id, err => { //Finds a matching document by id, removes it, passing the found document (if any) to the callback.
//                                                         //Executes the query if callback is passed.
// 			if (err) return response.status(500).send(err) 
// 			response.redirect("/")
// 		})
// 	})


//Start server
app.listen(process.env.PORT || PORT, () => console.log(`Yeah we're running on ${PORT}`))
