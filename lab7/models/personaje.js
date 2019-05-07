const mongoose = require('mongoose')


const Personaje = mongoose.model('Personaje', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    born: {
        type: Number,
        required: true
    },
    timeline: {
        type: String     
    },
    allegiance: {
        type: [String],
        required: false,
    },
    playedBy: {
        type: String,
        required: true,
    },
    titles: {
        type: [String],
        required: false,
    },
    father: {
        type: String,
        required: false,
    },
    mother: {
        type: String,
        required: false,
    },
    spouse: {
        type: String,
        required: false,
    }



})

module.exports = Personaje
