const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
title: { 
    type: String,
    required: true
},
content: {
    type: String, 
    required: true
}
date: { 
    type:Date,
    default: Date.now
}
})
module.exports=mongoose.model('modelName', itemSchema, 'items')

const itemSchema = new mongoose.Schema({})