import React, { useState } from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";

export default function About() {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<Header setToggle={setToggle} toggle={toggle} />
			<section
				className={[
					"About-page w-full",
					toggle ? "mt-80 transition duration-1000" : "",
				].join(" ")}
				id="about-page"
			>
				<div className="w-full flex md:flex-row flex-col md:mb-9 p-16 text-center leading-10">
					<div className="left-side md:w-1/2">
						<div className="flex items-center justify-center md:m-16 flex-col">
							<h1 className="text-6xl font-bold text-black">
								Welcome to Blog Website
							</h1>
							<p className="mt-12 text-xl">
								This website is basically to keep with your daily activities and
								certain thing that you have been doing today. It is very useful
								and some of its benefit are:
								<ul className="mt-8 text-xl">
									<li>Catch up with your actual schedule</li>
									<li>Easy to use</li>
									<li>Motivate your day</li>
								</ul>
							</p>
						</div>
					</div>
					<div className="right-side md:w-1/2 md:mt-0 mt-14 ">
						<div className="w-full h-full">
							<img
								src="/images/yoga.jpg"
								alt=""
								className="h-full w-full object-cover"
							/>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
