import "./assets/css/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { useState } from "react";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/About" element={<About />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
