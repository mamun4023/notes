const express = require('express');
const app = express();
const morgan = require('morgan');
const productRouter = require('./routers/products');
const orderRouter = require('./routers/orders');



// see terminal after request
app.use(morgan('dev'));


app.use('/products', productRouter);
app.use('/orders', orderRouter);




// handle err
app.use((req, res, next)=> {

	const error = new Error("Not found");
	error.status = 404;
	next(error);
})

app.use((error, req, res, next)=> {
	res.status(error.status || 500);
	res.json({
		error : {
			message : error.message
		}
	})
})



app.listen(3000, ()=> {
	console.log("server is running...")
});