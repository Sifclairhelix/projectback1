console.log("Hello world");

/**
|--------------------------------------------------
| Importing express library
|--------------------------------------------------
*/
const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require("cors");
var morgan = require("morgan");
/**
|--------------------------------------------------
| Dotenv required for getting .env file which is global
|--------------------------------------------------
*/

require("dotenv").config();

/**
|--------------------------------------------------
| Have to do this before cors
|--------------------------------------------------
*/
app.use(cors());
app.options("*", cors());

/**
|--------------------------------------------------
| Getting the DIRECTION_APIURL = /api/v1 from .env file
|--------------------------------------------------
*/
const workApi = process.env.DIRECTION_APIURL;

/**
|--------------------------------------------------
| Importing products router
|--------------------------------------------------
*/

const routerProducts = require("./routers/products");
const routerCategories = require("./routers/categories");

/**
|--------------------------------------------------
| Middleware is function has control of request and response
|--------------------------------------------------
*/
app.use(express.json());
app.use(morgan("tiny"));

/**
|--------------------------------------------------
| Setting the api routes for products
|--------------------------------------------------
*/
app.use(`${workApi}/products`, routerProducts);
app.use(`${workApi}/categories`, routerCategories);

/**
|--------------------------------------------------
| Sample Schema example productSchema
|--------------------------------------------------
*/

// const productSchema = mongoose.Schema({
// 	name: String,
// 	image: String,
// 	countInStock: Number,
// });

/**
|--------------------------------------------------
| Models start with capital letter
|--------------------------------------------------
*/
// const Product = mongoose.model("Product", productSchema);

/**
|--------------------------------------------------
| You need to set initial route express provides all those routes
|--------------------------------------------------
*/

/**
|--------------------------------------------------
| Importing const products from models this is not necessary 'const Product = require("./models/product");'
|--------------------------------------------------
*/

const Product = require("./models/product");

/**
|--------------------------------------------------
| Server is started at port 4000, got to remember this well
|--------------------------------------------------
*/
/**
|--------------------------------------------------
| Connected to the db database, however, you might need to get the dbname if we get deprecation errors

|--------------------------------------------------
*/
mongoose
	.connect(
		"mongodb+srv://ckmobile:ckmobile1234@cluster0.9ucff.mongodb.net/finalproject1?retryWrites=true&w=majority",
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => {
		console.log("Database is connected");
	})
	.catch((error) => {
		console.log(error);
	});

app.listen(4000, () => {
	console.log(workApi);
	console.log("Server is running http://localhost:4000");
});
