const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    content: { type: String, required: true },
    author: { type: String, required: true },
    timestamp: { type: Number, required: true }
})

module.exports = mongoose.model('Comment', commentSchema)