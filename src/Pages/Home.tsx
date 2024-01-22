import Videos from "../components/Videos/Videos";
import AdType1 from "../components/Ads/AdType1/AdType1";
import BottomSection from "../components/BottomSection/BottomSection";
import EnterTainment from "../components/Entertainment/EnterTainment";
import Life from "../components/Life/Life";
import Reviews from "../components/Reviews/Reviews";
import SportsSection from "../components/SportsSection/SportsSection";
import TopSection from "../components/TopSection/TopSection";
import PhotoGalary from "../components/PhotoGalary/PhotoGalary";
import ScrollToTop from "react-scroll-to-top";
const Home = () => {
	return (
		<>
			<TopSection></TopSection>
			<AdType1></AdType1>
			<SportsSection></SportsSection>
			<AdType1></AdType1>
			<EnterTainment></EnterTainment>
			<AdType1></AdType1>
			<PhotoGalary></PhotoGalary>
			<Videos></Videos>
			<Reviews></Reviews>
			<AdType1></AdType1>
			<Life></Life>
			<BottomSection></BottomSection>
			<ScrollToTop smooth />
		</>
	);
};

export default Home;
