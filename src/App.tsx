import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import SportsSection from "./components/SportsSection/SportsSection";
import NotFound from "./Pages/NotFound";
import EnterTainment from "./components/Entertainment/EnterTainment";
import Reviews from "./components/Reviews/Reviews";
import Life from "./components/Life/Life";

function App() {
	return (
		<div className="max-w-[1920px]">
			<Header></Header>

			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/bangladesh" element={<SportsSection></SportsSection>}></Route>
				<Route path="/international" element={<SportsSection></SportsSection>}></Route>
				<Route path="/sports" element={<SportsSection></SportsSection>}></Route>
				<Route path="/entertainment" element={<EnterTainment></EnterTainment>}></Route>
				<Route path="/opinions" element={<Reviews></Reviews>}></Route>
				<Route path="/religion" element={<SportsSection></SportsSection>}></Route>
				<Route path="/literature" element={<SportsSection></SportsSection>}></Route>
				<Route path="/jobs" element={<SportsSection></SportsSection>}></Route>
				<Route path="/others" element={<Life></Life>}></Route>
				<Route path="/travel" element={<SportsSection></SportsSection>}></Route>
				<Route path="*" element={<NotFound></NotFound>}></Route>
			</Routes>

			<Footer></Footer>
		</div>
	);
}

export default App;
