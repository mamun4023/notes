const express = require("express");
const router = express.Router();

const BlogController = require('../controller/blogController')


router.get('/', BlogController.blog_index);
router.get('/', BlogController.blog_detail);
router.post('/',BlogController.blog_post);
router.delete('/',BlogController.blog_delete);








module.exports = router;