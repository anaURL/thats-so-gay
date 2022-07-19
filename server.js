const express = require('express')
const app = express()
const PORT = 8000
const mongoose = require('mongoose')
require ('dotenv').config()

const mongooseModel = require('.models/micropedia')
const { response } = require('express')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.DB_CONNECTION), 
                {useNewUrlParser:true},
                () => console.log('Connected to database')


app.get('/', async(request, response) => {
    try {
        mongooseModel.find({}, (err, items) => {
			response.render("index.ejs", {
				itemsList: items
			})

    })
}   catch (err) {
    if (err) return response.status(500).send(err)
}   

app.post('/', async(request,response) => {
    const = newItem = new mongooseModel { //creating a neew object from the object model we imported(required) at the top 
        //this is going to pull the title and content from the names fields, submitted by the form we just set up

        { title: request.body.title
        content: request.body.content
        }
    }
    try { 
        await newItem.save()
        console.log(newItem)
        response.redirect("/")
    } catch(err) {
        if (err) return response.status(500).send(err)
        response.redirect('/')
    }
})


app.listen(PORT, () => console.log(`Yeah we're running on ${PORT}`))
