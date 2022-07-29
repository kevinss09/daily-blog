const express = require("express");
const router = express.Router();
const { Blog, List } = require("../models/Schemas.js");

const blog1 = new Blog({
	name: "kevin",
	topic: "React.js",
	explanation:
		"React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript libraryfor building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.",
});
const blog2 = new Blog({
	name: "kevin",
	topic: "React Router",
	explanation:
		"React Router is the  routing library for React. From the docs. “React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading dynamic route matching, and location transition handling built right in. Make the URL your first thought.",
});
const blog3 = new Blog({
	name: "kevin",
	topic: "Flexbox",
	explanation:
		"The Flexible Box Module, usually referred to as flexbox, was designed as a one-dimensional layout model, and as a method that could offer space distribution between items in an interface and powerful alignment capabilities. This article gives an outline of the main features of flexbox, which we will be exploring in more detail in the rest of these guides.",
});

const blogs = [blog1, blog2, blog3];

router.get("/blogs", (req, res) => {
	Blog.find({}, (err, foundBlog) => {
		if (foundBlog.length === 0) {
			Blog.insertMany(blogs, (err, insertBlog) => {
				if (!err) {
					console.log("Sucesfully insert all the initial blog in mongoDB");
				} else {
					console.log("it doesn't sucesfully all the initial blog in mongoDB");
				}
				res.redirect("/blogs");
			});
		} else {
			res.end(JSON.stringify(foundBlog));
		}
	});
});

router.get("/posts/:idc", (req, res) => {
	console.log("LILILI");
	const reqPost = req.params.idc;
	// console.log(reqPost);

	Blog.findOne({ topic: reqPost }, (err, foundOne) => {
		if (!err) {
			res.end(JSON.stringify(foundOne));
		} else {
			console.log(err);
		}
	});
});

router.get("/user/:usr", (req, res) => {
	const user = req.params.usr;
	// console.log("the user is " + user);
	List.findOne({ listName: user }, (err, foundOne) => {
		if (!err) {
			if (foundOne) {
				console.log("it has been found " + foundOne);
				res.end(JSON.stringify(foundOne));
			} else {
				console.log(user + " is not found");
			}
		}
	});
});

// router.get("/user/:usr", (req, res) => {
// 	console.log("it goes to here");
// 	const user = req.params.usr;
// 	console.log(user);
// 	List.findOne({ listName: user }, (err, foundOne) => {
// 		if (foundOne) {
// 			res.end(JSON.stringify(foundOne));
// 		} else {
// 			console.log(user + " is not found");
// 		}
// 	});
// });

// router.get("/user/:usr", (req, res) => {
// 	console.log("HELLO BANG");
// });

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

// to add the selected note that we have
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

// to delete the selected note
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

// router.get("/Kevin", (req, res) => {
// 	// const newlist = req.params.newlist;

// 	// console.log(newlist);

// 	List.findOne({ list: "Kevin" }, (err, foundOne) => {
// 		if (!err) {
// 			res.end(JSON.stringify(foundOne));
// 		} else {
// 			console.log(err);
// 		}
// 		// if (!err) {
// 		// 	if (!foundOne) {
// 		// 		const list = new List({
// 		// 			list: newlist,
// 		// 			blogs: blogs,
// 		// 		});
// 		// 		list.save();
// 		// 		res.redirect("/" + newlist);
// 		// 	} else {
// 		// 		console.log("The list of " + newlist + " has been found");
// 		// 		res.end(JSON.stringify(foundOne));
// 		// 	}
// 		// }
// 	});
// });

// 	List.findOne({ list: "Kevin" }, (err, foundOne) => {
// 		if (!err) {
// 			res.end(JSON.stringify(foundOne));
// 		} else {
// 			console.log(err);
// 		}
// 		// if (!err) {
// 		// 	if (!foundOne) {
// 		// 		const list = new List({
// 		// 			list: newlist,
// 		// 			blogs: blogs,
// 		// 		});
// 		// 		list.save();
// 		// 		res.redirect("/" + newlist);
// 		// 	} else {
// 		// 		console.log("The list of " + newlist + " has been found");
// 		// 		res.end(JSON.stringify(foundOne));
// 		// 	}
// 		// }

// app.get("/:createnewlist", (req, res) => {

//   const createnewlist = req.params.createnewlist;

//   List.findOne({name: createnewlist}, (err, foundOne) => {
//     if (!err){
//       if (!foundOne){
//         const list = new List({
//           name: createnewlist,
//           heroes: hero
//         })
//         list.save();
//         res.redirect("/" + createnewlist)
//       } else {
//         console.log("The list of " + createnewlist + " has been found")
//         res.render("list", {heroList: foundOne.heroes, listTitle: foundOne.name})
//       }
//     }
//   })
// })
