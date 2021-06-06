

const { Product } = require("../models/product");



var express = require("express");
const { Category } = require("../models/category");
const mongoose = require("mongoose");
const router = express.Router();


router.get(`/`, async (req, res) => {
	let Filtering = {};
	if (req.query.categories) {
		Filtering = { category: req.query.categories.split(",") };
	}

	const productList = await Product.find(Filtering).populate("category"); //.populate("category"); //.select("name  image");

	if (!productList) {
		res.status(500).json("success false" /*{ success: false }*/);
	}
	res.send(productList);

});



router.get(`/:id`, async (req, res) => {
	const product = await Product.findById(req.params.id); //.populate("category");

	if (!product) {
		res.status(500).json("success false" /*{ success: false }*/);
	}
	res.send(product);
});



router.post(`/`, async (req, res) => {
	const category = await Category.findById(req.body.category);
	if (!category) return res.status(400).send("Invalid Category");

	// const newProduct = req.body;
	// console.log(newProduct);
	let product = new Product({
		name: req.body.name,
		description: req.body.description,

		image: req.body.image,
		brand: req.body.brand,
		price: req.body.price,
		category: req.body.category,
		countInStock: req.body.countInStock,

		numReview: req.body.numReview,
		isFeatured: req.body.isFeatured,
	});

	product = await product.save();

	if (!product) return res.status(500).send("Product not created");

	res.send(product);
	// product
	// 	.save()
	// 	.then((createdProduct) => {
	// 		res.status(201).json(createdProduct);
	// 	})
	// 	.catch((error) => {
	// 		res.status(500).json({
	// 			error: error,
	// 			success: false,
	// 		});
	// 	});
	// res.send(newProduct);
});


router.put("/:id", async (req, res) => {
	if (!mongoose.isValidObjectId(req.params.id)) {
		res.status(400).send("Not valid Id");
	}
	const category = await Category.findById(req.body.category);
	if (!category) return res.status(400).send("Invalid Category");

	const product = await Product.findByIdAndUpdate(
		req.params.id,
		{
			name: req.body.name,
			description: req.body.description,
			image: req.body.image,
			brand: req.body.brand,
			price: req.body.price,
			category: req.body.category,
			countInStock: req.body.countInStock,
			numReview: req.body.numReview,
			isFeatured: req.body.isFeatured,
		},
		{
			new: true,
		}
	);

	if (!product) return res.status(400).send("Category not updated");

	res.send(product);
});

module.exports = router;
