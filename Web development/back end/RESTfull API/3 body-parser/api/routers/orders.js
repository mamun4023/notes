const express = require('express');
const router = express.Router();




router.get('/', (req, res)=> {
	res.send("order page")
})


router.post('/', (req, res ,next)=> {
	const order = {
		productId : req.body.productId,
		quantity : req.body.quantity
	};
	res.status(201).json({
		message : "order was created",
		order : order
	});
});




module.exports = router;