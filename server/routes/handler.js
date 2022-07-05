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
		name: req.body.username,
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

router.get("/posts/:idc", (req, res) => {
	const reqPost = req.params.idc;

	Blog.findOne({ topic: reqPost }, (err, foundOne) => {
		if (!err) {
			res.end(JSON.stringify(foundOne));
		} else {
			console.log(err);
		}
	});
});

router.post("/delete", (req, res) => {
	const id = req.body.id;

	Blog.findByIdAndRemove(id, (err, deleted) => {
		if (!err) {
			console.log("Sucesfully deleted the selected id ");
			res.redirect("/");
		} else {
			console.log("it cannot be deleted");
			console.log(err);
		}
	});
});

router.post("/addNote", (req, res) => {
	const newNotes = req.body.newNote;
	const id = req.body.id;
	const prevText = req.body.prevText;
	const topic = req.body.topic;

	const newNote = prevText + newNotes;
	console.log("Submit button has been clicked");
	console.log(newNote);

	Blog.findOneAndUpdate(
		{ _id: id },
		{ explanation: newNote },
		{ new: true },
		(err, added) => {
			if (!err) {
				console.log("Sucesfully updated the selected text ");
				res.redirect(`/posts/${topic}`);
			} else {
				console.log("It cannot be added");
				console.log(err);
			}
		}
	);
});

router.post("/deleteNote", (req, res) => {
	const deleteNotes = req.body.newNote;
	const id = req.body.id;
	const prevText = req.body.prevText;
	const topic = req.body.topic;

	const newNote = prevText.replace(deleteNotes, "");

	console.log(newNote);

	Blog.findOneAndUpdate(
		{ _id: id },
		{ explanation: newNote },
		{ new: true },
		(err, added) => {
			if (!err) {
				console.log("Sucesfully updated the selected text ");
				res.redirect(`/posts/${topic}`);
			} else {
				console.log("It cannot be added");
				console.log(err);
			}
		}
	);
});

module.exports = router;
