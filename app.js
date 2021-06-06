console.log("Hello world");


const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require("cors");
var morgan = require("morgan");


require("dotenv").config();


app.use(cors());
app.options("*", cors());


const workApi = process.env.DIRECTION_APIURL;



const routerProducts = require("./routers/products");
const routerCategories = require("./routers/categories");


app.use(express.json());
app.use(morgan("tiny"));


app.use(`${workApi}/products`, routerProducts);
app.use(`${workApi}/categories`, routerCategories);



const Product = require("./models/product");


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
