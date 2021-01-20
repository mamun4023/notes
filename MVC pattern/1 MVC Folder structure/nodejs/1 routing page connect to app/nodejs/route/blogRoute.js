const express = require('express');
const router = express.Router();



router.get("/post",(req, res)=> {
	res.send("from router page")
})





module.exports = router;