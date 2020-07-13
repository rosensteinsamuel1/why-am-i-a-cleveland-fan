const mongoose = require('mongoose');

const Posts = require('../models/post')

mongoose
    .connect(
        'mongodb+srv://sam:0FROXV5KjOxyUK2k@cluster0.1n2jy.mongodb.net/posts?retryWrites=true&w=majority'
    )
    .then(() => {
        console.log('Connected to the Mongo DB');
    })
    .catch(err => {
        console.log('Connection failed with error: ', error);
    });

exports.getCommentsForPostId = async (req, res, next) => {
    const postId = mongoose.Types.ObjectId(req.params.pid);
    const comments = await Posts.findById(postId, 'comments', (err, result) => {
        if (err) {
            console.log('ERROR: ', err)
            res.status(404)
        } else {
            console.log('RESULT: ', result)
            res.status(200).json({ comments: result })
        }
    })
}

exports.newCommentForPostId = (req, res, next) => {
    const postId = mongoose.Types.ObjectId(req.params.pid);
    const { author, content } = req.body;
    const timestamp = Date.now();
    // Insert new comment in the postId mongodb document
    const newComment = { author, content, timestamp, postId }
    console.log('postId: ', postId)
    Posts.updateOne({ '_id': postId }, {
        $push: {
            comments:
                newComment
        }
    }, (err, result) => {
        // Rest of the action goes here
        if (err) {
            console.log('ERROR: ', err)
        } else {
            console.log('RESULT: ', result)
        }
    })
    res.status(200).json({ comment: newComment })
}
