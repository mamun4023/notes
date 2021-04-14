const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/blogController')


router.get("/post",BlogController.blog_index)





module.exports = router;