import TopSection from "../components/TopSection/TopSection";
import SportsSection from "../components/SportsSection/SportsSection";
import EnterTainment from "../components/Entertainment/EnterTainment";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import Videos from "../components/Videos/Videos";
import Reviews from "../components/Reviews/Reviews";
import Life from "../components/Life/Life";
import BottomSection from "../components/BottomSection/BottomSection";

import Ad1 from "../assets/images/ads/ad1.png";
import Ad3 from "../assets/images/ads/ad3.png";
import Ad5 from "../assets/images/ads/ad5.png";
import Ad7 from "../assets/images/ads/ad7.png";
import Ad8 from "../assets/images/ads/ad8.png";

const Home = () => {
	return (
		<>
			<img src={Ad1} alt="aa" className="h-[90px] mx-[auto] my-[16px]" />
			<TopSection></TopSection>
			<img src={Ad3} alt="" className="h-[250px] mx-auto my-[24px] shrink-0" />
			<SportsSection></SportsSection>
			<img src={Ad5} alt="" className="h-[90px] mx-auto my-[24px] shrink-0" />
			<EnterTainment></EnterTainment>
			<img src={Ad7} alt="" className="h-[90px] mx-auto my-[24px] shrink-0" />
			<PhotoGallery></PhotoGallery>
			<Videos></Videos>
			<Reviews></Reviews>
			<img src={Ad8} alt="" className="h-[90px] mx-auto my-[24px] shrink-0" />
			<Life></Life>
			<BottomSection></BottomSection>
		</>
	);
};

export default Home;
