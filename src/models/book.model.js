const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    author: {
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    isbn:{
        type:String,
        required:true
    },
    release_date:{
        type:Date
    }
});

module.exports = mongoose.model('Book', BookSchema);