import React, { useState, useEffect } from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

export default function Home() {
	const [toggle, setToggle] = useState(false);
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetchItems();
	}, []);

	const fetchItems = async () => {
		const data = await fetch("/blogs");
		const items = await data.json();
		setItems(items);
	};

	// console.log(items);

	return (
		<>
			<Header setToggle={setToggle} toggle={toggle} />
			<section
				className={[
					"inside z-40 ",
					toggle ? "mt-80 transition duration-1000" : "",
				].join(" ")}
			>
				<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 m-12 justify-center content-center">
					{items.map((item, index) => {
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

			<footer className="flex text-center px-4 py-4 justify-center bottom-0 w-full bg-white shadow">
				<p className="text-base">
					Copyright 2022 • All Rights Reserved Blog-Web by kevinss09
				</p>
			</footer>
		</>
	);
}
