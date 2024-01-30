import Ad1 from "../assets/images/ads/ad1.png";
import Ad3 from "../assets/images/ads/ad3.png";

import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import Videos from "../components/Videos/Videos";

const Travel = () => {
	return (
		<div className="container mx-auto">
			<img src={Ad1} alt="ads" className="object-fill mx-[auto] my-6" />
			<div className="container inline-flex pl-3 items-center gap-2 border-l-2 border-solid border-COrange">
				<div className="flex py-2 justify-center items-center gap-2">
					<p className="text-CGray text-center ">ভ্রমণ</p>
				</div>
			</div>
			<PhotoGallery />
			<Videos />

			<img src={Ad3} alt="" className="object-fill mx-auto my-6 " />
		</div>
	);
};

export default Travel;