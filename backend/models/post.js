const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    content: { type: String, required: true },
    author: { type: String, required: true },
    timestamp: { type: Number, required: true }
})


const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    topic: { type: String, required: true },
    author: { type: String, required: true },
    timestamp: { type: Number, required: true },
    comments: {
        type: [commentSchema], required: true
    }
})

module.exports = mongoose.model('Post', postSchema)