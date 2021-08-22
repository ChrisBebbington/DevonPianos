const mongoose = require('mongoose');

const pianoSchema = new mongoose.Schema({
    make: String,
    model: String,
    description: String,
    price: String,
    images: [String]
})

module.exports = mongoose.model('Piano', pianoSchema)