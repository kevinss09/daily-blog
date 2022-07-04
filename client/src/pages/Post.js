import React, { useState } from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";

export default function Post() {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<div className="max-h-screen">
				<Header setToggle={setToggle} toggle={toggle} />
				<section className="Post max-h-screen">
					<div class="w-full">
						<form
							class="rounded md:py-14 md:px-44 p-12 md:mb-8 mt-3 md:mt-12 mb-6"
							method="POST"
							action="/addBlog"
						>
							<h1 className=" text-gray-700 text-3xl font-bold  mb-4">Post</h1>
							<div className="md:grid md:grid-cols-2">
								<div class="mb-6 md:w-3/6">
									<label
										class="block text-gray-700 text-sm font-bold mb-2"
										for="username"
									>
										Username:
									</label>
									<input
										class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="username"
										name="username"
										type="text"
										placeholder="Username"
									/>
								</div>
								<div class="mb-6 md:w-3/6">
									<label
										class="block text-gray-700 text-sm font-bold mb-2"
										for="topic"
									>
										Topic:
									</label>
									<input
										class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
										id="topic"
										name="topic"
										type="text"
										placeholder="Please type your topic"
									/>
								</div>
							</div>

							<div class="mb-6">
								<label
									class="block text-gray-700 text-sm font-bold mb-2"
									for="explanation"
								>
									Explanation:
								</label>
								<textarea
									class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
									id="explanation"
									name="explanation"
									type="textarea"
									rows="9"
									placeholder="insert your explanation in here"
								/>
							</div>

							<div class="flex items-center justify-between">
								<button
									class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									type="button"
								>
									<input type="submit" value="Submit" />
								</button>
							</div>
						</form>
					</div>
				</section>
				<Footer />
			</div>
		</>
	);
}
