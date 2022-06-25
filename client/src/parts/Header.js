import React, { useState } from "react";

export default function Header() {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="bg-white p-5 shadow md:flex md:items-center md:justify-between">
			<div className="left-side flex items-center justify-between">
				<span className="text-2xl font-heading text-black">
					<img
						src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/man-technologist.png"
						className="inline h-8 mr-5"
						alt="People emoji"
					/>
					What did I do Today?
				</span>

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
					toggle ? "opacity-100 top-[80px]" : "opacity-0",
				].join(" ")}
			>
				<li className="mx-4 my-6 md:my-0">
					<a
						href="#"
						className="text-xl font-heading hover:text-teal-500 duration-400 "
					>
						Home
					</a>
				</li>
				<li className="mx-4 my-6 md:my-0">
					<a
						href="#"
						className="text-xl font-heading hover:text-teal-500 duration-400"
					>
						About
					</a>
				</li>
				<li className="mx-4 my-6 md:my-0">
					<a
						href="#"
						className="text-xl font-heading hover:text-teal-500 duration-400"
					>
						Contact
					</a>
				</li>

				<button className="bg-teal-500 hover:bg-teal-600 px-6 py-1 text-black duration-500 mx-4 font-heading rounded-sm text-xl mb-4 md:mb-0 hover:text-white">
					New Post
				</button>
			</ul>
		</nav>
	);
}
