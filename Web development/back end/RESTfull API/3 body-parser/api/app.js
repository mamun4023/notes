const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productRouter = require('./routers/products');
const orderRouter = require('./routers/orders');



// see terminal after request
// its called logger midleware
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());



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