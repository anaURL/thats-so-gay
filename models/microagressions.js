//we are using mongoose to create our schema, as mongodb doesn't have a rigid structure,
//we want to make sure that our data is consistent

const mongoose = require('mongoose')

const micropediaSchema = new mongoose.Schema({
title: { 
    type: String,
    required: true
},
content: {
    type: String, 
    required: true
},
date: { 
    type:Date,
    default: Date.now
}
})
module.exports=mongoose.model('Microagression', micropediaSchema, 'microagressions')
