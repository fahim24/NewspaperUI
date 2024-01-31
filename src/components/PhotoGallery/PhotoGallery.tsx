import { Link } from "react-router-dom";
import NC1 from "../../assets/images/News/newsCover14.jpg";
import NC2 from "../../assets/images/News/newsCover15.jpg";
import NC3 from "../../assets/images/News/newsCover16.jpg";
import NC4 from "../../assets/images/News/newsCover17.jpg";
import NC5 from "../../assets/images/News/newsCover18.jpg";

import PicI from "../../assets/images/icons/picture.svg";

const PhotoGallery = () => {
	return (
		<section>
			{/* Section Head */}
			<div className="flex justify-center items-center gap-6 ">
				<div className="border border-solid border-ClGray w-full"> </div>
				<div className="text-CBlue hover:text-COrange items-center text-2xl font-bold">
					<Link to="/travel">ছবি</Link>
				</div>
				<div className="border border-solid border-ClGray w-full"> </div>
			</div>
			{/* Section Body */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-6">
				<div className="flex flex-col sm:flex-row lg:flex-col col-span-1 sm:col-span-2 lg:col-span-1 items-start gap-8">
					{/* News 1 */}
					<div className="relative w-full h-40 ">
						<img className=" w-full h-full object-cover" src={NC2} alt="News Cover" />
						<div className="absolute w-full h-full top-0 left-0 overlay" />
						<img src={PicI} alt="" className="absolute top-2.5 left-2.5 w-6 h-6" />

						<h3
							className="absolute left-2.5 bottom-2.5 text-white hover:text-COrange 
							text-md font-bold"
						>
							<a href="#">ইজতেমার আখেরি মোনাজাত</a>
						</h3>
					</div>
					{/* Divider */}
					{/* News 2 */}
					<div className="relative w-full h-40">
						<img className=" w-full h-full object-cover" src={NC3} alt="News Cover" />
						<div className="absolute w-full h-full top-0 left-0 overlay" />
						<img src={PicI} alt="" className="absolute top-2.5 left-2.5 w-6 h-6" />
						<h3 className="absolute left-2.5 bottom-2.5 text-white hover:text-COrange text-md font-bold">
							<a href="#">বিএনপি-পুলিশ সংঘর্ষ</a>
						</h3>
					</div>
				</div>
				{/* Divider */}
				{/* News 3 */}
				<div className="relative w-full h-52 sm:h-[350px] sm:col-span-2">
					<img className=" w-full h-full object-cover" src={NC1} alt="News Cover" />
					<div className="absolute w-full h-full top-0 left-0 overlay" />
					<img src={PicI} alt="" className="absolute top-5 left-5 w-6 h-6" />
					<h3 className="absolute left-5 bottom-5 text-COrange text-xl sm:text-2xl font-bold">
						<a href="#">আথিয়া শেঠির গায়ে হলুদ</a>
					</h3>
				</div>
				{/* Divider */}
				<div className="flex flex-col sm:flex-row lg:flex-col items-start col-span-1 sm:col-span-2 lg:col-span-1 gap-8 ">
					{/* News 4 */}
					<div className="relative w-full h-40">
						<img className=" w-full h-full object-cover" src={NC4} alt="News Cover" />
						<div className="absolute w-full h-full top-0 left-0 overlay" />
						<img src={PicI} alt="" className="absolute top-2.5 left-2.5 w-6 h-6" />
						<h3 className="absolute left-2.5 bottom-2.5 text-white hover:text-COrange text-md font-bold">
							<a href="#">গরিবের আটা মাটিতে</a>
						</h3>
					</div>
					{/* Divider */}
					{/* News 5 */}
					<div className="relative w-full h-40">
						<img className=" w-full h-full object-cover" src={NC5} alt="News Cover" />
						<div className="absolute w-full h-full top-0 left-0 overlay" />
						<img src={PicI} alt="" className="absolute top-2.5 left-2.5 w-6 h-6" />
						<h3 className="absolute left-2.5 bottom-2.5 text-white hover:text-COrange text-md font-bold">
							<a href="#">ঝুঁকি নিয়ে পারাপার</a>
						</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PhotoGallery;
