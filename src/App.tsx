import "./App.css";

import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import SportsSection from "./components/SportsSection/SportsSection";
import NotFound from "./Pages/NotFound";
import EnterTainment from "./components/Entertainment/EnterTainment";
import Reviews from "./components/Reviews/Reviews";
import Life from "./components/Life/Life";
import Login from "./Pages/Login";

function App() {
	return (
		<div className="max-w-[1920px]">
			<Header />

			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/bangladesh" element={<SportsSection />}></Route>
				<Route path="/international" element={<SportsSection />}></Route>
				<Route path="/sports" element={<SportsSection />}></Route>
				<Route path="/entertainment" element={<EnterTainment />}></Route>
				<Route path="/opinions" element={<Reviews />}></Route>
				<Route path="/religion" element={<SportsSection />}></Route>
				<Route path="/literature" element={<SportsSection />}></Route>
				<Route path="/jobs" element={<SportsSection />}></Route>
				<Route path="/others" element={<Life />}></Route>
				<Route path="/travel" element={<SportsSection />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
