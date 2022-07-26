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
