const { Category } = require("../models/category");
var express = require("express");
var router = express.Router();

router.get(`/`, async (req, res) => {
	const categoryList = await Category.find();

	if (!categoryList) {
		res.status(500).json("Success is false" /*{ success: false }*/);
	}
	res.status(200).send(categoryList);


});



router.get("/:id", async (req, res) => {
	const category = await Category.findById(req.params.id);

	if (!category)
		return res
			.status(500)
			.json("Invalid category ID" /*{ message: "Invalid category ID" }*/);

	res.status(200).send(category);
});



router.post("/", async (req, res) => {
	let category = new Category({
		name: req.body.name,
		icon: req.body.icon,
		color: req.body.color,
	});

	category = await category.save();

	if (!category) return res.status(404).send("category not created");

	res.send(category);
});



router.delete("/:id", (req, res) => {
	Category.findByIdAndRemove(req.params.id)
		.then((category) => {
			if (category) {
				return res
					.status(200)
					.json(
						"success true" 
					);
			} else {
				return res
					.status(404)
					.json(
						"success false" 
					);
			}
		})
		.catch((error) => {
			return res
				.status(400)
				.json("issue with updating" );
		});
});

module.exports = router;
