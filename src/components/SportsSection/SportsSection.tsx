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
		{ id: 2, label: "Option 2" },
		{ id: 3, label: "Option 3" },
		{ id: 4, label: "Option 4" },
		// Add more items as needed
	];
	return (
		<section>
			{/* Content Section */}
			<div className="my-6 grid grid-cols-[1fr] sm:grid-cols-[2fr] md:grid-cols-[3fr] lg:grid-cols-[3fr_auto_1fr] gap-4 items-start">
				{/* News Section */}
				<div className="flex flex-col gap-4">
					{/* News Row-1 */}
					<div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_auto_1fr] md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4">
						{/* News 1 */}
						<article className="relative w-full h-full sm:col-span-3 ">
							<img className=" w-full h-full object-cover" src={NC1} alt="News Cover" />
							<div className="absolute w-full h-full top-0 left-0 overlay" />
							<h2 className="absolute left-5 bottom-5 text-white hover:text-COrange text-lg sm:text-2xl font-bold">
								<NewsHeadline />
							</h2>
						</article>
						{/* Divider */}
						<div className="border border-solid border-ClGray w-full sm:w-0 md:h-full"></div>
						{/* News 2 */}
						<article className="flex sm:hidden md:flex flex-col item-start gap-4">
							{/* News Cover */}
							<img src={NC8} alt="News Cover" className="h-44 object-cover" />
							{/* News Content */}
							<div className="flex flex-col items-start gap-4 ">
								{/* News Headline */}
								<h3 className=" text-CBlue hover:text-COrange text-xl font-bold line-clamp-2">
									<NewsHeadline></NewsHeadline>
								</h3>
								{/* News Details */}
								<p className=" text-CGray line-clamp-3">
									<NewsBody></NewsBody>
								</p>
								{/* News Footer */}
								<div className="flex items-center gap-2 ">
									{/* News Time */}
									<p className="text-sm text-CGray">
										<NewsTime></NewsTime>
									</p>
									{/* Divider */}
									<img src={Ellipse} alt="ellipse" />
									{/* News Tag */}
									<a href="#" className="text-sm text-COrange font-bold">
										ফুটবল
									</a>
								</div>
							</div>
						</article>
					</div>
					{/* Divider */}
					<div className="border border-solid border-ClGray w-full"></div>
					{/* News Row-2 */}
					<div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_auto_1fr] md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4">
						{/* News 3 */}
						<div className="flex flex-col item-start gap-4">
							{/* News Cover */}
							<img src={NC5} alt="News Cover" className="h-44 object-cover" />
							{/* News Body */}
							<NewsType2></NewsType2>
							{/* News Footer */}
							<div className="flex items-center gap-2">
								{/* News Time */}
								<p className="text-sm text-CGray">
									<NewsTime></NewsTime>
								</p>
								{/* Divider */}
								<img src={Ellipse} alt="" />
								{/* News Tag */}
								<a href="#" className="text-sm text-COrange font-bold">
									ক্রিকেট
								</a>
							</div>
						</div>
						{/* Divider */}
						<div className="border border-solid border-ClGray w-full sm:h-full"></div>
						{/* News 4 */}
						<div className="flex flex-col item-start gap-4">
							{/* News Cover */}
							<img src={NC6} alt="News Cover" className="h-44 object-cover" />
							{/* News Body */}
							<NewsType2></NewsType2>
							{/* News Body */}
							<div className="flex items-center gap-2 ">
								{/* News Time */}
								<p className="text-sm text-CGray">
									<NewsTime></NewsTime>
								</p>
								{/* Divider */}
								<img src={Ellipse} alt="ellipse" />
								{/* News Tag */}
								<a href="#" className="text-sm text-COrange font-bold">
									ফুটবল
								</a>
							</div>
						</div>
						{/* Divider */}
						<div className="border border-solid border-ClGray w-full sm:w-0 md:h-full"></div>
						{/* News 5 */}
						<div className="flex sm:hidden md:flex flex-col item-start gap-4">
							{/* News Cover */}
							<img src={NC7} alt="News Cover" className="h-44 object-cover" />
							{/* News Body */}
							<NewsType2></NewsType2>
							{/* News Footer */}
							<div className="flex items-center gap-2 ">
								{/* News Time */}
								<p className="text-sm text-CGray">
									<NewsTime></NewsTime>
								</p>
								{/* Divider */}
								<img src={Ellipse} alt="ellipse" />
								{/* News Tag */}
								<a href="#" className="text-sm text-COrange font-bold">
									অলিম্পিক
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* Divider */}
				<div className="border border-solid border-ClGray h-full"></div>
				{/* Side Section */}
				<div className="flex flex-col items-start gap-4 w-full">
					{/* News Search */}
					<div className="flex flex-col items-start gap-4 w-full">
						{/* News Search Header */}
						<h3 className="text-CBlue font-bold">আমার এলাকার খবর</h3>
						{/* Divider */}
						<div className="border border-solid border-ClGray w-full"></div>
						{/* News Search Content */}
						<div className="flex flex-col item-start gap-5 w-full">
							{/* News Search Options */}
							<div className="flex flex-col item-start gap-5 w-full">
								{/* Option 1 */}
								<div className=" flex items-center justify-center w-full">
									<div className="relative w-full">
										{/* Option Button */}
										<button
											className="flex justify-between items-center w-full px-4 py-2 border border-solid border-ClGray rounded gap-4"
											onClick={handleToggleDropdown1}
										>
											<p className="text-CGray text-sm ">বিভাগ</p>
											<img src={Down} alt="dropdown" className="" />
										</button>
										{/* Option Menu */}
										<div
											className={`${
												isOpen1 ? "block" : "hidden"
											} absolute left-0 mt-2 rounded-md bg-white border z-10 w-full`}
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
								{/* Option 2 */}
								<div className=" flex items-center justify-center">
									<div className="relative w-full">
										{/* Option Button */}
										<button
											id="dropdown-button2"
											className="inline-flex justify-between w-full items-start px-4 py-2 border border-solid border-ClGray rounded"
											onClick={handleToggleDropdown2}
										>
											<p className="text-CGray text-sm ">জেলা</p>
											<img src={Down} alt="dropdown" className="" />
										</button>
										{/* Option Menu */}
										<div
											id="dropdown-menu2"
											className={`${
												isOpen2 ? "block" : "hidden"
											} absolute left-0 mt-2 rounded-md bg-white border z-10 w-full`}
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
								{/* Option 3 */}
								<div className=" flex items-center justify-center">
									<div className="relative w-full">
										{/* Option Button */}
										<button
											id="dropdown-button3"
											className="inline-flex justify-between w-full items-start px-4 py-2 border border-solid border-ClGray rounded"
											onClick={handleToggleDropdown3}
										>
											<p className="text-CGray text-sm ">উপজেলা</p>
											<img src={Down} alt="dropdown" className="" />
										</button>
										{/* Option Menu */}
										<div
											id="dropdown-menu3"
											className={`${
												isOpen3 ? "block" : "hidden"
											} absolute left-0 mt-2 rounded-md bg-white border z-10 w-full`}
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
							{/* News Search Button */}
							<a
								href="#"
								className="rounded bg-COrange text-white font-bold text-center px-4 py-1 "
							>
								খুঁজুন
							</a>
						</div>
					</div>
					{/* ADS */}
					<img src={AD4} alt="" className="object-cover mx-auto" />
				</div>
			</div>
		</section>
	);
};

export default SportsSection;
