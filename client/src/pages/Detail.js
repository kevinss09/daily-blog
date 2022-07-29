import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import { Link } from "react-router-dom";

export default function Detail() {
	const { idc } = useParams();
	const [toggle, setToggle] = useState(false);
	const [items, setItems] = useState([]);
	const [addNote, setAddNote] = useState(false);
	const [whichNote, setWhichNote] = useState("");

	useEffect(() => {
		fetchItems();
	}, []);

	const fetchItems = async () => {
		const data = await fetch(`/posts/${idc}`);
		const items = await data.json();
		setItems(items);
	};

	return (
		<>
			<Header setToggle={setToggle} toggle={toggle} />

			<section className="" id="Detail">
				<div className="md:px-44 md:py-32 py-12 mb-12 px-7 text-center">
					<h1 className="text-4xl font-bold mb-9">{items.topic}</h1>
					<p className="text-lg">{items.explanation}</p>

					{addNote ? (
						<form action={`/${whichNote}`} method="POST">
							<input
								type="text"
								className="px-2 py-1 bg-white w-44 mt-8"
								name="newNote"
								autoComplete="off"
							/>
							<input type="hidden" name="prevText" value={items.explanation} />
							<input type="hidden" name="id" value={items._id} />
							<input type="hidden" name="topic" value={items.topic} />
							<button
								type="submit"
								className="px-4 py-1 bg-blue-600 mx-4 text-white rounded-lg outline-none"
							>
								Submit
							</button>
						</form>
					) : (
						<div>
							<button
								className="bg-teal-600 hover:bg-teal-600 px-6 py-1 mt-9 text-black duration-500 mx-4 font-heading rounded-xl text-xl mb-4 md:mb-0 hover:text-white"
								onClick={() => {
									setAddNote((prev) => !prev);
									setWhichNote("addNote");
								}}
							>
								<h1>Add Note</h1>
							</button>
							<button
								className="bg-teal-600 hover:bg-teal-600 px-6 py-1 mt-9 text-black duration-500 mx-4 font-heading rounded-xl text-xl mb-4 md:mb-0 hover:text-white"
								onClick={() => {
									setAddNote((prev) => !prev);
									setWhichNote("deleteNote");
								}}
							>
								<h1>Delete Note</h1>
							</button>
						</div>
					)}
				</div>
			</section>

			{/* Create the footer again and set it to fixed position */}
			<Footer />
		</>
	);
}
