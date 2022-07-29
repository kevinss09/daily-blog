import "./assets/css/app.css";
import {
	BrowserRouter,
	Routes,
	Route,
	HashRouter,
	Router,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Post from "./pages/Post";
import { useState } from "react";
import Detail from "./pages/Detail";
import ListPage from "./pages/ListPage";
import UserPage from "./pages/UserPage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/About" element={<About />} />
					<Route path="/Post" element={<Post />} />
					<Route exact path="/posts/:idc" element={<Detail />} />
					{/* <Route exact path="/user/:usr" element={<UserPage />} /> */}
					<Route exact path="/user/:usr" element={<UserPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
