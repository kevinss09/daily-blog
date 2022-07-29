import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../parts/Header";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

export default function UserPage() {
	// to get tthe params that have been set
	const { usr } = useParams();
	// console.log(usr);

	// set the toogle for the header
	const [toggle, setToggle] = useState(false);

	// useState for the item sectiion
	const [items, setItems] = useState([]);

	console.log(usr);

	useEffect(() => {
		fetchItems();
	}, []);

	const fetchItems = async () => {
		const data = await fetch(`/user/${usr}`);
		const items = await data.json();
		setItems(items);
	};

	console.log(items);

	return (
		<>
			<Header setToggle={setToggle} toogle={toggle} />

			{/* Section */}
			<section
				className={[
					"inside z-40 ",
					toggle ? "mt-80 transition duration-1000" : "",
				].join(" ")}
			>
				<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 m-12 justify-center content-center">
					{items.blogs.map((item, index) => {
						return (
							<div
								className="flex items-center justify-center my-4"
								key={index}
							>
								<div className="box z-0 hover:z-10 hover:scale-105 transition-all hover:shadow-2xl card w-64 h-80 flex items-center justify-center bg-white shadow-lg rounded-3xl flex-col relative">
									<Link
										to={`/posts/${item.topic}`}
										className="card w-64 h-72 flex items-center justify-center rounded-3xl absolute top-0"
									>
										<div className="w-full h-full pl-6 pr-6 pb-6 pt-8 overflow-hidden">
											<div className="w-full h-full overflow-hidden">
												<h1 className="text-3xl text-black">{item.topic}</h1>
												<p className="text-black text-sm mt-4">
													{item.explanation}
												</p>
											</div>
										</div>
									</Link>
									<form
										action="/delete"
										method="POST"
										className="icon absolute bottom-5 right-9 text-xl"
									>
										<button>
											<FaTrash />
											<input type="hidden" name="id" value={item._id} />
										</button>
									</form>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			{/* End of section */}

			<footer className="flex fixed text-center px-4 py-4 justify-center bottom-0 w-full bg-white shadow">
				<p className="text-base">
					Copyright 2022 • All Rights Reserved Blog-Web by kevinss09
				</p>
			</footer>
		</>
	);
}
