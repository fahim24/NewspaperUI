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
			<img src={Ad1} alt="ads" className="object-fill mx-[auto] my-6" />
			<TopSection></TopSection>
			<img src={Ad3} alt="" className="object-fill mx-auto my-6 " />
			<SportsSection></SportsSection>
			<img src={Ad5} alt="" className="object-fill mx-auto my-6 " />
			<EnterTainment></EnterTainment>
			<img src={Ad7} alt="" className="object-fill mx-auto my-6 " />
			<PhotoGallery></PhotoGallery>
			<Videos></Videos>
			<Reviews></Reviews>
			<img src={Ad8} alt="" className="object-fill mx-auto my-6 " />
			<Life></Life>
			<BottomSection></BottomSection>
		</>
	);
};

export default Home;
