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

const Blog = new mongoose.model("Blog", blogsSchema);

module.exports = Blog;
