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
			<div className="container mx-auto ">
				{/* Section Head */}

				<div className="flex justify-center items-center gap-6 ">
					<div className="border border-solid border-ClGray w-full"> </div>
					<div className="text-CBlue hover:text-COrange items-center text-2xl font-bold">
						<Link to="/travel">ছবি</Link>
					</div>
					<div className="border border-solid border-ClGray w-full"> </div>
				</div>
				{/* Section Body */}
				<div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 my-6">
					<div className="flex flex-col sm:flex-row lg:flex-col items-start gap-4">
						{/* News 1 */}
						<div className="relative w-[296px] h-40">
							<img className=" w-full h-full object-cover" src={NC2} alt="News Cover" />
							<div className="absolute w-full h-full top-0 left-0 overlay" />
							<img
								src={PicI}
								alt=""
								className="absolute top-[10px] left-[10px] w-[24px] h-[24px]"
							/>

							<h3
								className="absolute left-[10px] bottom-[10px] text-white hover:text-COrange 
							text-md font-bold"
							>
								<a href="#">ইজতেমার আখেরি মোনাজাত</a>
							</h3>
						</div>
						<div className="border border-solid border-ClGray w-full sm:w-0 lg:w-full"> </div>
						{/* News 2 */}
						<div className="relative w-[296px] h-[159px]">
							<img className=" w-full h-full object-cover" src={NC3} alt="News Cover" />
							<div className="absolute w-full h-full top-0 left-0 overlay" />
							<img
								src={PicI}
								alt=""
								className="absolute top-[10px] left-[10px] w-[24px] h-[24px]"
							/>
							<h3 className="absolute left-[10px] bottom-[10px] text-white hover:text-COrange text-md font-bold">
								<a href="#">বিএনপি-পুলিশ সংঘর্ষ</a>
							</h3>
						</div>
					</div>
					<div className="border border-solid border-ClGray lg:h-[350px] "></div>
					{/* News 3 */}
					<div className="relative w-full lg:w-[624px] h-[350px] mb-6 md:mb-0">
						<img className=" w-full h-full object-cover" src={NC1} alt="News Cover" />
						<div className="absolute w-full h-full top-0 left-0 overlay" />
						<img src={PicI} alt="" className="absolute top-[20px] left-[20px] w-[24px] h-[24px]" />
						<h3 className="absolute left-[20px] bottom-[20px] text-COrange text-2xl font-bold">
							<a href="#">আথিয়া শেঠির গায়ে হলুদ</a>
						</h3>
					</div>
					<div className="border border-solid border-ClGray lg:h-[350px] "></div>

					<div className="flex flex-col sm:flex-row lg:flex-col items-start gap-4 ">
						{/* News 4 */}
						<div className="relative w-[296px] h-[159px]">
							<img className=" w-full h-full object-cover" src={NC4} alt="News Cover" />
							<div className="absolute w-full h-full top-0 left-0 overlay" />
							<img
								src={PicI}
								alt=""
								className="absolute top-[10px] left-[10px] w-[24px] h-[24px]"
							/>
							<h3 className="absolute left-[10px] bottom-[10px] text-white hover:text-COrange text-md font-bold">
								<a href="#">গরিবের আটা মাটিতে</a>
							</h3>
						</div>
						<div className="border border-solid border-ClGray w-full sm:w-0 lg:w-full"></div>
						{/* News 5 */}
						<div className="relative w-[296px] h-[159px]">
							<img className=" w-full h-full object-cover" src={NC5} alt="News Cover" />
							<div className="absolute w-full h-full top-0 left-0 overlay" />
							<img
								src={PicI}
								alt=""
								className="absolute top-[10px] left-[10px] w-[24px] h-[24px]"
							/>
							<h3 className="absolute left-[10px] bottom-[10px] text-white hover:text-COrange text-md font-bold">
								<a href="#">ঝুঁকি নিয়ে পারাপার</a>
							</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PhotoGallery;
