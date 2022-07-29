const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	topic: {
		type: String,
		require: true,
	},
	explanation: {
		type: String,
		require: true,
	},
	Date: {
		type: Date,
		default: Date.now,
	},
});

const listsSchema = new mongoose.Schema({
	listName: {
		type: String,
		require: true,
	},
	blogs: [blogsSchema],
});

const Blog = new mongoose.model("Blog", blogsSchema);
const List = new mongoose.model("List", listsSchema);

module.exports = { Blog, List };
