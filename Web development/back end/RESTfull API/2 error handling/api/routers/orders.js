const express = require('express');
const router = express.Router();




router.get('/', (req, res)=> {
	res.send("order page")
})







module.exports = router;