router.get(`/`, async (req, res) => {
	// const product = {
	// 	id: 1,
	// 	name: "hair dresser",
	// 	image: "some_url",
	// };

	let Filtering = {};
	if (req.query.categories) {
		const Filtering = { category: req.query.categories.split(",") };
	}

	/**
    |--------------------------------------------------
    | Trying to filter queries in the categories
    |--------------------------------------------------
    */

	/**
    |--------------------------------------------------
    | You can use await and async method to try and catch, the .select can be removed not necessasry
    |--------------------------------------------------
    */
	const productList = await Product.find(Filtering).populate("category"); //.populate("category"); //.select("name  image");

	if (!productList) {
		res.status(500).json({ success: false });
	}
	res.send(productList);

	/**
    |--------------------------------------------------
    | Another method below to manage promises
    |--------------------------------------------------
    */
	// productList
	// 	.then((getcreatedProduct) => {
	// 		res.status(201).json(getcreatedProduct);
	// 	})
	// 	.catch((error) => {
	// 		res.status(500).json({
	// 			error: error,
	// 			success: false,
	// 		});
	// 	});
	// res.send("Hello what up testing this method not sure whether it works");
});
