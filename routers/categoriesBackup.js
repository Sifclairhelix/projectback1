// router.get(`/`, async (req, res) => {
// 	const categoryList = await Category.find();

// 	/**
//     |--------------------------------------------------
//     | This is the way with asyc and await router.get(`/`, async (req, res) => { , const categoryList = await Category.find();
//     |--------------------------------------------------
//     */
// 	if (!categoryList) {
// 		res.status(500).json({ success: false });
// 	}
// 	res.status(200).send(categoryList);

/**
    |--------------------------------------------------
    | With the old school way
    |--------------------------------------------------
    */
// categoryList
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
// });

/**
|--------------------------------------------------
| Getting a category by ID
|--------------------------------------------------
*/

// router.get("/:id", async (req, res) => {
// 	const category = await Category.findById(req.params.id);

// 	if (!category)
// 		return res.status(500).json({ message: "Invalid category ID" });

// 	res.status(200).send(category);
// });

/**
|--------------------------------------------------
| Posting a category method
|--------------------------------------------------
*/

// router.post("/", async (req, res) => {
// 	let category = new Category({
// 		name: req.body.name,
// 		icon: req.body.icon,
// 		color: req.body.color,
// 	});

// 	category = await category.save();

// 	if (!category) return res.status(404).send("category not created");

// 	res.send(category);
// });

/**
|--------------------------------------------------
| Deleting a category, URL will look like api/v1/the id
|--------------------------------------------------
*/

// router.delete("/:id", (req, res) => {
// 	Category.findByIdAndRemove(req.params.id)
// 		.then((category) => {
// 			if (category) {
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
| Updating a category dont know if this will be necessary
|--------------------------------------------------
*/

// router.put("/:id", async (req, res) => {
// 	const category = await Category.findByIdAndUpdate(
// 		req.params.id,
// 		{
// 			name: req.body.name,
// 			icon: req.body.params,
// 			color: req.body.color,
// 		},
// 		{
// 			new: true,
// 		}
// 	);

// 	if (!category) return res.status(400).send("Category not updated");

// 	res.send(category);
// });
