const express = require("express");
const router = express.Router();
const Blog = require("../models/Schemas.js");

router.get("/blogs", (req, res) => {
	Blog.find({}, (err, foundBlog) => {
		if (err) {
			console.log(err);
		} else {
			res.end(JSON.stringify(foundBlog));
		}
	});
});

router.post("/addBlog", async (req, res) => {
	// create an object
	const blog = new Blog({
		username: req.body.username,
		topic: req.body.topic,
		explanation: req.body.explanation,
	});

	try {
		await blog.save((err, newResult) => {
			if (err) {
				console.log(err);
				res.end("Cannot save the new blog to the database");
			} else {
				res.redirect("/");
				res.end();
			}
		});
	} catch {
		console.log(err);
		res.redirect("/");
		res.end();
	}
});

module.exports = router;
