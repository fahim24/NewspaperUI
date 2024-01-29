import AD4 from "../../assets/images/ads/ad4.png";

import NC1 from "../../assets/images/News/newsCover1.png";
import NC5 from "../../assets/images/News/newsCover5.jpg";
import NC6 from "../../assets/images/News/newsCover6.jpg";
import NC7 from "../../assets/images/News/newsCover7.jpg";
import NC8 from "../../assets/images/News/newsCover8.jpg";

import Down from "../../assets/images/icons/down.svg";
import Ellipse from "../../assets/images/icons/ellipse2.svg";

import NewsType2 from "../News/NewsType/NewsType2";
import NewsTime from "../News/NewsTime";
import NewsBody from "../News/NewsBody";
import NewsHeadline from "../News/NewsHeadline";
import { useState } from "react";

const SportsSection = () => {
	const [isOpen1, setIsOpen1] = useState<boolean>(false);
	const [isOpen2, setIsOpen2] = useState<boolean>(false);
	const [isOpen3, setIsOpen3] = useState<boolean>(false);

	const handleToggleDropdown1 = () => {
		setIsOpen1(!isOpen1);
	};

	const handleToggleDropdown2 = () => {
		setIsOpen2(!isOpen2);
	};

	const handleToggleDropdown3 = () => {
		setIsOpen3(!isOpen3);
	};

	const items = [
		{ id: 1, label: "Option 1" },
		{ id: 2, label: "Option 3" },
		{ id: 3, label: "Option 3" },
		{ id: 4, label: "Option 4" },
		// Add more items as needed
	];
	return (
		<section>
			<div className="container mx-auto ">
				{/* Section Head */}
				<div className="flex justify-center items-center gap-[24px] my-[24px]">
					<div className="border border-solid border-ClGray w-full"> </div>
					<div className="text-COrange items-center text-2xl font-bold">খেলাধুলা</div>
					<div className="border border-solid border-ClGray w-full"> </div>
				</div>
				{/* Section Body */}
				<div className="flex gap-[16px]">
					{/* News Section */}
					<div className="flex flex-col gap-[16px]">
						{/* News Row-1 */}
						<div className="flex gap-[16px]">
							<div className="w-[624px] h-[350px]">
								<div className="relative w-[624px] h-[350px]">
									<img className=" w-full h-full object-cover" src={NC1} alt="News Cover" />
									<div className="absolute w-full h-full top-0 left-0 overlay" />
									<div className="absolute left-[20px] bottom-[20px] text-white hover:text-COrange text-2xl font-bold leading-9">
										<NewsHeadline />
									</div>
								</div>
							</div>
							<div className="border border-solid border-ClGray h-full "></div>
							<div className="flex flex-col item-start gap-[16px]">
								<img src={NC8} alt="" className="h-[166px] w-[296px] object-cover" />
								<div className="flex flex-col items-start gap-[16px] ">
									<div className=" text-CBlue hover:text-COrange text-xl font-bold w-[296px] line-clamp-2">
										<NewsHeadline></NewsHeadline>
									</div>
									<div className="w-[296px] text-CGray line-clamp-3">
										<NewsBody></NewsBody>
									</div>
									<div className="flex items-center gap-[8px] ">
										<div className="text-sm text-CGray">
											<NewsTime></NewsTime>
										</div>
										<img src={Ellipse} alt="" />
										<p className="text-sm text-COrange font-bold">ফুটবল</p>
									</div>
								</div>
							</div>
						</div>
						<div className="border border-solid border-ClGray "></div>
						{/* News Row-2 */}
						<div className="flex gap-[16px]">
							<div className="flex flex-col item-start gap-[16px]">
								<img src={NC5} alt="" className="h-[166px] w-[296px]" />
								<NewsType2></NewsType2>
								<div className="flex items-center gap-[8px] ">
									<div className="text-sm text-CGray">
										<NewsTime></NewsTime>
									</div>
									<img src={Ellipse} alt="" />
									<p className="text-sm text-COrange font-bold">ক্রিকেট</p>
								</div>
							</div>
							<div className="border border-solid border-ClGray h-full "></div>
							<div className="flex flex-col item-start gap-[16px]">
								<img src={NC6} alt="" className="h-[166px] w-[296px]" />
								<NewsType2></NewsType2>
								<div className="flex items-center gap-[8px] ">
									<div className="text-sm text-CGray">
										<NewsTime></NewsTime>
									</div>
									<img src={Ellipse} alt="" />
									<p className="text-sm text-COrange font-bold">ফুটবল</p>
								</div>
							</div>
							<div className="border border-solid border-ClGray h-full "></div>
							<div className="flex flex-col item-start gap-[16px]">
								<img src={NC7} alt="" className="h-[166px] w-[296px]" />
								<NewsType2></NewsType2>
								<div className="flex items-center gap-[8px] ">
									<div className="text-sm text-CGray">
										<NewsTime></NewsTime>
									</div>
									<img src={Ellipse} alt="" />
									<p className="text-sm text-COrange font-bold">অলিম্পিক</p>
								</div>
							</div>
						</div>
					</div>
					{/* Side Section */}
					<div className="inline-flex flex-col items-start gap-[16px]">
						<div className="flex flex-col items-start gap-[16px]">
							<h3 className="text-CBlue font-bold">আমার এলাকার খবর</h3>
							<div className="border border-solid border-ClGray w-full"></div>
							<div className="flex flex-col item-start gap-[20px]">
								<div className="flex flex-col item-start gap-[20px]">
									<div className=" flex items-center justify-center">
										<div className="relative">
											<button
												id="dropdown-button"
												className="inline-flex justify-between w-[296px] items-start px-[15px] py-[10px] border border-solid border-ClGray rounded-[4px]"
												onClick={handleToggleDropdown1}
											>
												<p className="text-CGray text-sm ">বিভাগ</p>
												<img src={Down} alt="dropdown" className="h-[20px] w-[20px]" />
											</button>
											<div
												id="dropdown-menu"
												className={`${
													isOpen1 ? "block" : "hidden"
												} absolute left-0 mt-2 rounded-md bg-white border z-10 w-[296px]`}
											>
												{/* Dropdown content goes here */}
												{items.map((item) => (
													<a
														key={item.id}
														href="#"
														className="block px-4 py-2 text-CGray  hover:text-CBlue cursor-pointer rounded-md"
													>
														{item.label}
													</a>
												))}
											</div>
										</div>
									</div>
									<div className=" flex items-center justify-center">
										<div className="relative">
											<button
												id="dropdown-button"
												className="inline-flex justify-between w-[296px] items-start px-[15px] py-[10px] border border-solid border-ClGray rounded-[4px]"
												onClick={handleToggleDropdown2}
											>
												<p className="text-CGray text-sm ">জেলা</p>
												<img src={Down} alt="dropdown" className="h-[20px] w-[20px]" />
											</button>
											<div
												id="dropdown-menu"
												className={`${
													isOpen2 ? "block" : "hidden"
												} absolute left-0 mt-2 rounded-md bg-white border z-10 w-[296px]`}
											>
												{/* Dropdown content goes here */}
												{items.map((item) => (
													<a
														key={item.id}
														href="#"
														className="block px-4 py-2 text-CGray  hover:text-CBlue cursor-pointer rounded-md"
													>
														{item.label}
													</a>
												))}
											</div>
										</div>
									</div>
									<div className=" flex items-center justify-center">
										<div className="relative">
											<button
												id="dropdown-button"
												className="inline-flex justify-between w-[296px] items-start px-[15px] py-[10px] border border-solid border-ClGray rounded-[4px]"
												onClick={handleToggleDropdown3}
											>
												<p className="text-CGray text-sm ">উপজেলা</p>
												<img src={Down} alt="dropdown" className="h-[20px] w-[20px]" />
											</button>
											<div
												id="dropdown-menu"
												className={`${
													isOpen3 ? "block" : "hidden"
												} absolute left-0 mt-2 rounded-md bg-white border z-10 w-[296px]`}
											>
												{/* Dropdown content goes here */}
												{items.map((item) => (
													<a
														key={item.id}
														href="#"
														className="block px-4 py-2 text-CGray  hover:text-CBlue cursor-pointer rounded-md"
													>
														{item.label}
													</a>
												))}
											</div>
										</div>
									</div>
								</div>
								<button className="flex w-[296px] h-[40px] justify-center items-center gap-[10px] rounded-[4px] bg-COrange text-white	font-bold">
									<a href="#">খুঁজুন</a>
								</button>
							</div>
						</div>

						<img src={AD4} alt="" className="w-[296px] h-[246px]" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default SportsSection;
