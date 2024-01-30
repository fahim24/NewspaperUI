import "./App.css";

import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import Sports from "./Pages/Sports";
import Entertainment from "./Pages/Entertainment";
import Comments from "./Pages/Comments";
import Bangladesh from "./Pages/Bangladesh";
import International from "./Pages/International";
import Religion from "./Pages/Religion";
import Literature from "./Pages/Literature";
import Jobs from "./Pages/Jobs";
import Others from "./Pages/Others";
import Travel from "./Pages/Travel";

function App() {
	return (
		<div>
			<Header />

			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/bangladesh" element={<Bangladesh />}></Route>
				<Route path="/international" element={<International />}></Route>
				<Route path="/sports" element={<Sports />}></Route>
				<Route path="/entertainment" element={<Entertainment />}></Route>
				<Route path="/comments" element={<Comments />}></Route>
				<Route path="/religion" element={<Religion />}></Route>
				<Route path="/literature" element={<Literature />}></Route>
				<Route path="/jobs" element={<Jobs />}></Route>
				<Route path="/others" element={<Others />}></Route>
				<Route path="/travel" element={<Travel />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
