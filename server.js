const express = require('express')
const app = express()
const PORT = 8000 
const mongoose = require('mongoose')

//import jsdom
const jsdom = require("jsdom");
// create a window with the document object
const dom = new jsdom.JSDOM("")
// import jquery and supply it with the new dom
const jQuery = require('jquery')(dom.window)


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

// preview of each microagression - returns 500 
app
    .route("/examples/:id")
    .get((request,response) => {
        const id = request.params.id 
        console.log(mongoose.isValidObjectId(request.params.id))
        Microagression.findById({}, (err, microagressions) => {
            if (err) return response.status(500).send(err)
            response.render('examples.ejs', { 
                microagressionsList:microagressions, 
                idMicroagression:id })
        })
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
app
        .route("/remove/:id")
        . get((request, response) => {
            const id = request.params.id
            Microagression.findByIdAndRemove(id, err => {
			if (err) return response.status(500).send(err)
			response.redirect("/")
		})
	})


//Start server
app.listen(process.env.PORT || PORT, () => console.log(`Yeah we're running on ${PORT}`))
