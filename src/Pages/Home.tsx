import TopSection from "../components/TopSection/TopSection";
import SportsSection from "../components/SportsSection/SportsSection";
import EnterTainmentSection from "../components/EntertainmentSection/EnterTainmentSection";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import Videos from "../components/Videos/Videos";
import Life from "../components/Life/Life";
import BottomSection from "../components/BottomSection/BottomSection";

import Ad1 from "../assets/images/ads/ad1.png";
import Ad3 from "../assets/images/ads/ad3.png";
import Ad5 from "../assets/images/ads/ad5.png";
import Ad7 from "../assets/images/ads/ad7.png";
import Ad8 from "../assets/images/ads/ad8.png";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import CommentSection from "../components/CommentSection/CommentSection";

const Home = () => {
	return (
		<div className="container mx-auto px-2.5">
			{/* ADS */}
			<img src={Ad1} alt="ads" className="object-fill mx-auto my-6" />
			{/* News Section */}
			<TopSection />
			{/* ADS */}
			<img src={Ad3} alt="" className="object-fill mx-auto my-6 " />
			{/* News Section */}
			<SectionHeader myHeader={"খেলাধুলা"} myLink={"/sports"} />
			<SportsSection />
			{/* ADS */}
			<img src={Ad5} alt="" className="object-fill mx-auto my-6 " />
			{/* News Section */}
			<SectionHeader myHeader={"বিনোদন"} myLink={"/entertainment"} />
			<EnterTainmentSection />
			{/* ADS */}
			<img src={Ad7} alt="" className="object-fill mx-auto my-6 " />
			{/* News Section */}
			<PhotoGallery />
			{/* News Section */}
			<Videos />
			{/* News Section */}
			<SectionHeader myHeader={"মতামত"} myLink={"/comments"} />
			<CommentSection />
			{/* ADS */}
			<img src={Ad8} alt="" className="object-fill mx-auto my-6 " />
			{/* News Section */}
			<SectionHeader myHeader={"জীবনযাপন"} myLink={"/others"} />
			{/* News Section */}
			<Life />
			{/* News Section */}
			<BottomSection />
		</div>
	);
};

export default Home;
