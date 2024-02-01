import CommentSection from "../components/CommentSection/CommentSection";
import SectionHeader from "../components/SectionHeader/SectionHeader";

import Ad1 from "../assets/images/ads/ad1.png";
import Ad3 from "../assets/images/ads/ad3.png";

const Comments = () => {
	return (
		<div className="container mx-auto px-2.5">
			<img src={Ad1} alt="ads" className="object-fill mx-[auto] my-6" />
			<SectionHeader myHeader={"মতামত"} myLink={"/comments"}></SectionHeader>
			<div className="container inline-flex pl-3 items-center gap-2 border-l-2 border-solid border-COrange">
				<div className="flex py-2 justify-center items-center gap-2">
					<p className="text-CGray text-center ">মতামত</p>
				</div>
			</div>
			<CommentSection></CommentSection>

			<img src={Ad3} alt="" className="object-fill mx-auto my-6 " />
		</div>
	);
};

export default Comments;
