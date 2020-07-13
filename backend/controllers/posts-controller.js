const { v4: uuidv4 } = require('uuid');

const DUMMY_POSTS = [{
    id: 1234,
    author: 'Sam',
    content: 'This is the content for a  dummy post',
    title: 'Dummy post',
    timestamp: 1592127001583,
    topic: 'Indians'
}]

exports.getPosts = (req, res, next) => {
    res.status(200).json({ posts: DUMMY_POSTS })
};

exports.newPost = (req, res, next) => {
    const { author, content, topic, title } = req.body;

    const timestamp = Date.now();
    const newPost = {
        id: uuidv4(),
        title,
        content,
        topic,
        author,
        timestamp
    };
    console.log('Created post: ', newPost);
    DUMMY_POSTS.push(newPost);
    res.status(201).json({ post: newPost }); // success when something is created
};