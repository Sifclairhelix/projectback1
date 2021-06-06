// router.get(`/`, async (req, res) => {
// 	let Filtering = {};
// 	if (req.query.categories) {
// 		Filtering = { category: req.query.categories.split(",") };
// 	}

// 	const productList = await Product.find(Filtering).populate("category"); //.populate("category"); //.select("name  image");

// 	if (!productList) {
// 		res.status(500).json("success false" /*{ success: false }*/);
// 	}
// 	res.send(productList);

// 	/**
//     |--------------------------------------------------
//     | Another method below to manage promises
//     |--------------------------------------------------
//     */
// 	// productList
// 	// 	.then((getcreatedProduct) => {
// 	// 		res.status(201).json(getcreatedProduct);
// 	// 	})
// 	// 	.catch((error) => {
// 	// 		res.status(500).json({
// 	// 			error: error,
// 	// 			success: false,
// 	// 		});
// 	// 	});
// 	// res.send("Hello what up testing this method not sure whether it works");
// });

/**
|--------------------------------------------------
| Get request for only one product
|--------------------------------------------------
*/

// router.get(`/:id`, async (req, res) => {
// 	const product = await Product.findById(req.params.id); //.populate("category");

// 	if (!product) {
// 		res.status(500).json("success false" /*{ success: false }*/);
// 	}
// 	res.send(product);
// });

/**
|--------------------------------------------------
| This method below is just showing how to post, example showing to post to a database, the product comes from a database
|--------------------------------------------------
*/

// router.post(`/`, async (req, res) => {
// 	const category = await Category.findById(req.body.category);
// 	if (!category) return res.status(400).send("Invalid Category");

// 	// const newProduct = req.body;
// 	// console.log(newProduct);
// 	let product = new Product({
// 		name: req.body.name,
// 		description: req.body.description,
// 		// richDescription: req.body.richDescription,
// 		image: req.body.image,
// 		brand: req.body.brand,
// 		price: req.body.price,
// 		category: req.body.category,
// 		countInStock: req.body.countInStock,
// 		// rating: req.body.rating,
// 		numReview: req.body.numReview,
// 		isFeatured: req.body.isFeatured,
// 	});

// 	product = await product.save();

// 	if (!product) return res.status(500).send("Product not created");

// 	res.send(product);
// 	// product
// 	// 	.save()
// 	// 	.then((createdProduct) => {
// 	// 		res.status(201).json(createdProduct);
// 	// 	})
// 	// 	.catch((error) => {
// 	// 		res.status(500).json({
// 	// 			error: error,
// 	// 			success: false,
// 	// 		});
// 	// 	});
// 	// res.send(newProduct);
// });

/**
|--------------------------------------------------
| Updating the products dont know if this will be necessary, the 
|       {
|			new: true,
|		}
|
|       the above statment can be removed
|
|   if (!mongoose.isValidObjectId(req.params.id)) {
|		res.status(400).send("Not valid Id");
|	}

might be able to remove that
|--------------------------------------------------
*/

// router.put("/:id", async (req, res) => {
// 	if (!mongoose.isValidObjectId(req.params.id)) {
// 		res.status(400).send("Not valid Id");
// 	}
// 	const category = await Category.findById(req.body.category);
// 	if (!category) return res.status(400).send("Invalid Category");

// 	const product = await Product.findByIdAndUpdate(
// 		req.params.id,
// 		{
// 			name: req.body.name,
// 			description: req.body.description,
// 			richDescription: req.body.richDescription,
// 			image: req.body.image,
// 			brand: req.body.brand,
// 			price: req.body.price,
// 			category: req.body.category,
// 			countInStock: req.body.countInStock,
// 			rating: req.body.rating,
// 			numReview: req.body.numReview,
// 			isFeatured: req.body.isFeatured,
// 		},
// 		{
// 			new: true,
// 		}
// 	);

// 	if (!product) return res.status(400).send("Category not updated");

// 	res.send(product);
// });

/**
|--------------------------------------------------
| Deleting a product, URL will look like api/v1/the id
|--------------------------------------------------
*/

// router.delete("/:id", (req, res) => {
// 	Product.findByIdAndRemove(req.params.id)
// 		.then((product) => {
// 			if (product) {
// 				return res
// 					.status(200)
// 					.json({ success: true, message: "Category deleted" });
// 			} else {
// 				return res
// 					.status(404)
// 					.json({ success: false, message: "category not found" });
// 			}
// 		})
// 		.catch((error) => {
// 			return res.status(400).json({ success: false, error: error });
// 		});
// });

/**
|--------------------------------------------------
| Get products stats with method
|--------------------------------------------------
*/

// router.get(`/get/count`, async (req, res) => {
// 	const productCount = await Product.countDocuments((count) => count);

// 	if (!productCount) {
// 		res.status(500).json({ success: false });
// 	}
// 	res.send({ productCount: productCount });
// });

/**
|--------------------------------------------------
| Get featured products 
|--------------------------------------------------
*/

// router.get(`/get/featured/:count`, async (req, res) => {
// 	const count = req.params.count ? req.params.count : 0;
// 	const products = await Product.find({ isFeatured: true }).limit(+count);

// 	if (!products) {
// 		res.status(500).json({ success: false });
// 	}
// 	res.send(products);
// });

/**
|--------------------------------------------------
| Filtering by categories for products
|--------------------------------------------------
*/
