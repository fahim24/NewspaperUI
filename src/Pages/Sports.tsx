import Ad1 from "../assets/images/ads/ad1.png";
import Ad3 from "../assets/images/ads/ad3.png";

import Ellipse from "../assets/images/icons/ellipse2.svg";

import SectionHeader from "../components/SectionHeader/SectionHeader";
import SportsSection from "../components/SportsSection/SportsSection";

const Sports = () => {
	return (
		<div className="container mx-auto px-2.5">
			<img src={Ad1} alt="ads" className="object-fill mx-[auto] my-6" />
			<SectionHeader myHeader={"খেলাধুলা"} myLink={"/sports"}></SectionHeader>
			<div className="container inline-flex pl-3 items-center gap-2 border-l-2 border-solid border-COrange">
				<div className="flex py-2 justify-center items-center gap-2">
					<p className="text-CGray text-center ">ফুটবল</p>
				</div>
				<img src={Ellipse} alt="" />
				<div className="flex py-2 justify-center items-center gap-2">
					<p className="text-CGray text-center ">ক্রিকেট</p>
				</div>
				<img src={Ellipse} alt="" />
				<div className="flex py-2 justify-center items-center gap-2">
					<p className="text-CGray text-center ">অলিম্পিক</p>
				</div>
			</div>
			<SportsSection></SportsSection>

			<img src={Ad3} alt="" className="object-fill mx-auto my-6 " />
		</div>
	);
};

export default Sports;
