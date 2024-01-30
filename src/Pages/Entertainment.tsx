import Ad1 from "../assets/images/ads/ad1.png";
import Ad3 from "../assets/images/ads/ad3.png";

import Ellipse from "../assets/images/icons/ellipse2.svg";

import EnterTainmentSection from "../components/EntertainmentSection/EnterTainmentSection";
import SectionHeader from "../components/SectionHeader/SectionHeader";

const Entertainment = () => {
	return (
		<div className="container mx-auto">
			<img src={Ad1} alt="ads" className="object-fill mx-[auto] my-6" />
			<SectionHeader myHeader={"বিনোদন"} myLink={"/entertainment"}></SectionHeader>
			<div className="container inline-flex pl-3 items-center gap-2 border-l-2 border-solid border-COrange">
				<div className="flex py-2 justify-center items-center gap-2">
					<p className="text-CGray text-center ">হলিউড</p>
				</div>
				<img src={Ellipse} alt="" />
				<div className="flex py-2 justify-center items-center gap-2">
					<p className="text-CGray text-center ">বলিউড</p>
				</div>
				<img src={Ellipse} alt="" />
				<div className="flex py-2 justify-center items-center gap-2">
					<p className="text-CGray text-center ">টলিউড</p>
				</div>
			</div>
			<EnterTainmentSection></EnterTainmentSection>

			<img src={Ad3} alt="" className="object-fill mx-auto my-6 " />
		</div>
	);
};

export default Entertainment;
