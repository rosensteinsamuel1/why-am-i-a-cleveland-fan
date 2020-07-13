const express = require('express');

const postsController = require('../controllers/posts-controller')

const router = express.Router();

// Return all posts
router.get('/', postsController.getPosts);

// Create new post
router.post('/', postsController.newPost)

module.exports = router;
