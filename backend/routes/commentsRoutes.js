const express = require('express');

const commentsController = require('../controllers/comments-controller')

const router = express.Router();

// Return all comments for post id
router.get('/:pid', commentsController.getCommentsForPostId);

// Create new comment for post id
router.post('/:pid', commentsController.newCommentForPostId)

module.exports = router;
