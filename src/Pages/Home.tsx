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
		<div className="container mx-auto">
			<img src={Ad1} alt="ads" className="object-fill mx-[auto] my-6" />
			<TopSection></TopSection>
			<img src={Ad3} alt="" className="object-fill mx-auto my-6 " />
			<SectionHeader myHeader={"খেলাধুলা"} myLink={"/sports"}></SectionHeader>
			<SportsSection></SportsSection>
			<img src={Ad5} alt="" className="object-fill mx-auto my-6 " />
			<SectionHeader myHeader={"বিনোদন"} myLink={"/entertainment"}></SectionHeader>
			<EnterTainmentSection></EnterTainmentSection>
			<img src={Ad7} alt="" className="object-fill mx-auto my-6 " />
			<PhotoGallery></PhotoGallery>
			<Videos></Videos>
			<SectionHeader myHeader={"মতামত"} myLink={"/comments"}></SectionHeader>
			<CommentSection></CommentSection>
			<img src={Ad8} alt="" className="object-fill mx-auto my-6 " />
			<SectionHeader myHeader={"বিবিধ"} myLink={"/others"}></SectionHeader>
			<Life></Life>
			<BottomSection></BottomSection>
		</div>
	);
};

export default Home;
