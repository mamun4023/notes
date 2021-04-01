const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/blogController')


router.get("/post",BlogController.blog_index)
router.get("/post/detail", BlogController.block_detail)








module.exports = router;