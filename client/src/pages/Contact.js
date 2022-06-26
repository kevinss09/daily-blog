import React, { useState } from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";

export default function Contact() {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<Header setToggle={setToggle} toggle={toggle} />
			<section className={toggle ? "mt-80 transition duration-1000" : ""}>
				<div className="container mx-auto">
					<div className="flex flex-col items-center justify-center mt-20">
						<div className="w-full md:w-1/2 text-center m-30 p-9">
							<div className="flex items-center justify-center">
								<img
									src="./images/face.jpeg"
									alt="congrats illustration"
									className="rounded-full w-80 h-80 "
								/>
							</div>
							<h2 className="text-3xl font-semibold mt-6 mb-3">
								Hi, Kevin Sugeng!
							</h2>
							<p className="contact-p text-xl mb-14 ">
								This website contains what have you been doing today, so you can
								keep track the improvement of yourself!
							</p>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
