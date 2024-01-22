import HotNews from "./HotNews/HotNews";
import Intro from "./Intro/Intro";
import Nav from "./Nav/Nav";

const Header = () => {
	return (
		<div>
			<Intro></Intro>
			<Nav></Nav>
			<HotNews></HotNews>
		</div>
	);
};

export default Header;
