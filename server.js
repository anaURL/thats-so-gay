const express = require('express') //making it possible to use express in this file
const app = express() //creating an express app
const PORT = 8000  //setting a port to 8000
const mongoose = require('mongoose')  //requiring mongoose 

const Microagression = require('./models/microagressions') // this is where I get the model
require ('dotenv').config() //allows us to look for vars inside the .env file

//Set middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser: true},
    () => {console.log('Connected to database')}
  )
       
//GET
app.get('/', async(request, response) => {
    try {
        Microagression.find({}, (err, microagressions) => { //find ALL documents {} IN the database, we could use a filter too
			response.render("index.ejs", {
				microagressionsList: microagressions}); //RENDERING TO OUR EJS
    }); 
}   catch (err) {
        if (err) return response.status(500).send(err)
}
});   


//POST 

app.post('/', async(request,response) => { //creating a new micoagression based on a mongoose schema, from the form submit
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
        response.redirect("/")
    } catch(err) {
        if (err) return response.status(500).send(err)
        response.redirect('/')
    }
})

//UPDATE

app.route("/edit/:id") //using the route for a get request
    .get ((request, response) => {  
    const id = request.params.id  //we need to send id so the db knows which item we are looking for 
    Microagression.find({}, (err, microagressions) => { // //find ALL documents {} IN the database 
    response.render ('edit.ejs', { //rendering edit.ejs, passing through an object that contains items
        microagressionsList: microagressions, //  object with two things: 1. key is called microagressionsList and contains microagressions
        idMicroagression:id})   // an idMicroagression that contains id
    })
})


.post ((request, response) => { //find and update
    const id = request.params.id //we need to send id so the db knows which item we are looking for 
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
app
        .route("/remove/:id") 
        . get((request, response) => {
            const id = request.params.id //assigning query id to a id variable
            Microagression.findByIdAndRemove(id, err => { //Finds a matching document by id, removes it, passing the found document (if any) to the callback.
                                                        //Executes the query if callback is passed.
			if (err) return response.status(500).send(err) 
			response.redirect("/")
		})
	})


//Start server
app.listen(PORT, () => console.log(`Yeah we're running on ${PORT}`))
