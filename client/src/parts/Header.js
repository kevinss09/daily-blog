import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ setToggle, toggle }) {
	return (
		<nav className="bg-white p-5 shadow md:flex md:items-center md:justify-between ">
			<div className="left-side flex items-center justify-between">
				<Link to="/" className="cursor-pointer">
					<span className="text-2xl font-heading text-black">
						<img
							src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/man-technologist.png"
							className="inline h-8 mr-5"
							alt="People emoji"
						/>
						What did I do Today?
					</span>
				</Link>

				<span
					className="text-3xl right-0 pt-1 md:hidden block cursor-pointer"
					onClick={() => setToggle((prev) => !prev)}
				>
					<ion-icon
						name={toggle ? "close-outline" : "menu-outline"}
						className="duration-300"
					></ion-icon>
				</span>
			</div>
			{/* z-[-1] md:static absolute bg-white w-full left-0 */}

			<ul
				className={[
					"right-side md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-5 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-300",
					toggle ? "opacity-100 top-[80px] z-30" : "opacity-0",
				].join(" ")}
			>
				<li className="mx-4 my-6 md:my-0">
					<Link
						to="/"
						className="text-xl font-heading hover:text-teal-500 duration-400 "
					>
						Home
					</Link>
				</li>
				<li className="mx-4 my-6 md:my-0">
					<Link
						to="/About"
						className="text-xl font-heading hover:text-teal-500 duration-400"
					>
						About
					</Link>
				</li>
				<li className="mx-4 my-6 md:my-0">
					<Link
						to="/Contact"
						className="text-xl font-heading hover:text-teal-500 duration-400"
					>
						Contact
					</Link>
				</li>

				<button className="bg-teal-500 hover:bg-teal-600 px-6 py-1 text-black duration-500 mx-4 font-heading rounded-sm text-xl mb-4 md:mb-0 hover:text-white">
					<Link to="/Post">New Post</Link>
				</button>
			</ul>
		</nav>
	);
}
