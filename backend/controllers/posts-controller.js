const mongoose = require('mongoose');

const Post = require('../models/post')

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

const DUMMY_POSTS = [{
    id: 1234,
    author: 'Sam',
    content: 'This is the content for a  dummy post',
    title: 'Dummy post',
    timestamp: 1592127001583,
    topic: 'Indians'
}]

exports.getPosts = async (req, res, next) => {
    const posts = await Post.find().exec();
    res.status(200).json({ posts: posts })
};

exports.newPost = async (req, res, next) => {
    const { author, content, topic, title, comments } = req.body;

    const timestamp = Date.now();
    const createdPost = new Post({
        title,
        content,
        topic,
        author,
        timestamp,
        comments
    });
    const result = await createdPost.save();
    console.log('Created post: ', result);
    // DUMMY_POSTS.push(newPost);
    res.status(201).json({ post: result }); // success when something is created
};