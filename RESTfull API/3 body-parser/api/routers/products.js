const express = require('express');
const router = express.Router();




router.get('/', (req, res,)=> {
	res.status(200).json({
		message : "Handle get request "
	})
})



router.post('/', (req, res,)=> {
	const product = {
		name : req.body.name,
		price : req.body.price
	};

	res.status(201).json({
		message : 'Handling post request to product',
		createProduct : product
	});
});






module.exports = router;