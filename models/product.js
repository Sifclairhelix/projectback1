const mongoose = require("mongoose");
// const { Schema } = mongoose;

/**
|--------------------------------------------------
| Importing product schema from database/ moreover could also be mongoose.schema
|--------------------------------------------------
*/

/**
|--------------------------------------------------
| category: {
|		type: mongoose.Schema.Types.ObjectId,
|		ref: "Category",
|		required: true,
|
|   This is required to connect the products and category together
|--------------------------------------------------
*/

const productSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	// richDescription: {
	// 	type: String,
	// 	default: "",
	// },
	image: {
		type: String,
		default: "",
	},
	// images: [
	// 	{
	// 		type: String,
	// 	},
	// ],
	brand: {
		type: String,
		default: "",
	},
	price: {
		type: Number,
		default: 0,
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category",
		required: true,
	},
	countInStock: {
		type: Number,
		required: true,
		min: 0,
		max: 100,
	},
	// rating: {
	// 	type: Number,
	// 	default: 0,
	// },
	numReviews: {
		type: Number,
		default: 0,
	},
	isFeatured: {
		type: Boolean,
		default: false,
	},
	dateCreated: {
		type: Date,
		default: Date.now,
	},
});

productSchema.virtual("id").get(function () {
	return this._id.toHexString();
});

productSchema.set("toJSON", {
	virtuals: true,
});

exports.Product = mongoose.model("Product", productSchema);