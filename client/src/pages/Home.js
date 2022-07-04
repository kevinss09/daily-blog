import React, { useState, useEffect } from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import { Link } from "react-router-dom";

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

	console.log(items);

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
					<div className="flex items-center justify-center my-4">
						<Link
							to="#"
							className="box z-0 hover:z-10 hover:scale-105 transition-all hover:shadow-2xl card w-64 h-80 flex items-center justify-center bg-white shadow-lg rounded-3xl"
						>
							<div className=" avatar w-full h-full pl-6 pr-6 pb-6 pt-8">
								<h1 className="text-3xl text-black ">React Router</h1>
								<p className="text-black text-sm mt-4">
									Contrary to popular belief, Lorem Ipsum is not simply random
									text. It has roots in a piece of classical Latin literature
									from 45 BC, making it over 2000 years old. Richard McClintock,
									a Latin professor at Hampden-Sydney College in Virginia,
									looked up one of the more obscure Latin words, consectetur,
									from
								</p>
							</div>
						</Link>
					</div>
					<div className="flex items-center justify-center my-4">
						<Link
							to="#"
							className=" box z-0 hover:z-10 hover:scale-105 transition-all hover:shadow-2xl card w-64 h-80 flex items-center justify-center bg-white shadow-lg rounded-3xl"
						>
							<div className="w-full h-full pl-6 pr-6 pb-6 pt-8">
								<h1 className="text-3xl text-black ">Flexbox</h1>
								<p className="text-black text-sm mt-4">
									Contrary to popular belief, Lorem Ipsum is not simply random
									text. It has roots in a piece of classical Latin literature
									from 45 BC, making it over 2000 years old. Richard McClintock,
									a Latin professor at Hampden-Sydney College in Virginia,
									looked up one of the more obscure Latin words, consectetur,
									from
								</p>
							</div>
						</Link>
					</div>
					<div className="flex items-center justify-center my-4">
						<Link
							to="#"
							className="box z-0 hover:z-10 hover:scale-105 transition-all hover:shadow-2xl card w-64 h-80 flex items-center justify-center bg-white shadow-lg rounded-3xl"
						>
							<div className="w-full h-full pl-6 pr-6 pb-6 pt-8">
								<h1 className="text-3xl text-black ">Grid</h1>
								<p className="text-black text-sm mt-4">
									Contrary to popular belief, Lorem Ipsum is not simply random
									text. It has roots in a piece of classical Latin literature
									from 45 BC, making it over 2000 years old. Richard McClintock,
									a Latin professor at Hampden-Sydney College in Virginia,
									looked up one of the more obscure Latin words, consectetur,
									from
								</p>
							</div>
						</Link>
					</div>
					<div className="flex items-center justify-center my-4">
						<Link
							to="#"
							className="box z-0 hover:z-10 hover:scale-105 transition-all hover:shadow-2xl card w-64 h-80 flex items-center justify-center bg-white shadow-lg rounded-3xl"
						>
							<div className="w-full h-full pl-6 pr-6 pb-6 pt-8">
								<h1 className="text-3xl text-black ">Box Shadow</h1>
								<p className="text-black text-sm mt-4">
									Contrary to popular belief, Lorem Ipsum is not simply random
									text. It has roots in a piece of classical Latin literature
									from 45 BC, making it over 2000 years old. Richard McClintock,
									a Latin professor at Hampden-Sydney College in Virginia,
									looked up one of the more obscure Latin words, consectetur,
									from
								</p>
							</div>
						</Link>
					</div>
					<div className="flex items-center justify-center my-4">
						<Link
							to="#"
							className="box z-0 hover:z-10 hover:scale-105 transition-all hover:shadow-2xl card w-64 h-80 flex items-center justify-center bg-white shadow-lg rounded-3xl"
						>
							<div className="w-full h-full pl-6 pr-6 pb-6 pt-8">
								<h1 className="text-3xl text-black ">Position</h1>
								<p className="text-black text-sm mt-4">
									Contrary to popular belief, Lorem Ipsum is not simply random
									text. It has roots in a piece of classical Latin literature
									from 45 BC, making it over 2000 years old. Richard McClintock,
									a Latin professor at Hampden-Sydney College in Virginia,
									looked up one of the more obscure Latin words, consectetur,
									from
								</p>
							</div>
						</Link>
					</div>
					<div className="flex items-center justify-center my-4">
						<Link
							to="#"
							className="box z-0 hover:z-10 hover:scale-105 transition-all hover:shadow-2xl card w-64 h-80 flex items-center justify-center bg-white shadow-lg rounded-3xl"
						>
							<div className="w-full h-full pl-6 pr-6 pb-6 pt-8">
								<h1 className="text-3xl text-black ">Github</h1>
								<p className="text-black text-sm mt-4">
									Contrary to popular belief, Lorem Ipsum is not simply random
									text. It has roots in a piece of classical Latin literature
									from 45 BC, making it over 2000 years old. Richard McClintock,
									a Latin professor at Hampden-Sydney College in Virginia,
									looked up one of the more obscure Latin words, consectetur,
									from
								</p>
							</div>
						</Link>
					</div>

					{items.map((item, index) => {
						return (
							<div className="flex items-center justify-center my-4">
								<Link
									to="#"
									className="box z-0 hover:z-10 hover:scale-105 transition-all hover:shadow-2xl card w-64 h-80 flex items-center justify-center bg-white shadow-lg rounded-3xl"
								>
									<div className="w-full h-full pl-6 pr-6 pb-6 pt-8 overflow-hidden">
										<div className="w-full h-full overflow-y-auto">
											<h1 className="text-3xl text-black">{item.topic}</h1>
											<p className="text-black text-sm mt-4">
												{item.explanation}
											</p>
										</div>
									</div>
								</Link>
							</div>
						);
					})}
				</div>
			</section>
			<Footer />
		</>
	);
}
