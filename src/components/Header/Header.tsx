import HotNews from "./HotNews/HotNews";
import Intro from "./Intro/Intro";
import Nav from "./Nav/Nav";

const Header = () => {
	return (
		<div>
			<Intro />
			<Nav />
			<HotNews />
		</div>
	);
};

export default Header;
