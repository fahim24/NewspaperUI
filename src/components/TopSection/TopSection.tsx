import NewsHeadline from "../News/NewsHeadline";
import NewsBody from "../News/NewsBody";
import NewsTime from "../News/NewsTime";
import NewsTags from "../News/NewsTags";

import NewsType2 from "../News/NewsType/NewsType2";
import NewsType3 from "../News/NewsType/NewsType3";

import NC1 from "../../assets/images/News/newsCover1.png";
import NC2 from "../../assets/images/News/newsCover2.jpg";
import NC3 from "../../assets/images/News/newsCover3.jpg";
import NC4 from "../../assets/images/News/newsCover4.jpg";

import AD2 from "../../assets/images/ads/ad2.png";

import Ellipse from "../../assets/images/icons/ellipse2.svg";

const TopSection = () => {
	return (
		<section>
			<div className="container mx-auto">
				<div className="border border-solid border-ClGray w-full my-6"></div>
				<div className="flex flex-col xl:flex-row gap-4">
					<div className="flex flex-col gap-[16px] items-center xl:items-start">
						{/* News Section row-1*/}
						{/* News 1 */}

						<div className="flex flex-col lg:flex-row gap-[20px]">
							<div className="flex flex-col items-start order-last lg:order-first gap-[20px]">
								<div className="flex flex-col items-start gap-[15px] ">
									<h1 className=" text-CBlue hover:text-COrange text-2xl font-bold  line-clamp-3">
										<NewsHeadline></NewsHeadline>
									</h1>
									<p className=" text-CGray line-clamp-8">
										<NewsBody></NewsBody>
									</p>
								</div>
								<div className="flex items-center gap-[8px] ">
									<p className="text-sm text-CGray">
										<NewsTime></NewsTime>
									</p>
									<img src={Ellipse} alt="" />
									<p className="text-sm text-COrange font-bold">
										<NewsTags></NewsTags>
									</p>
								</div>
							</div>
							<img
								src={NC1}
								alt="cover"
								className="h-[350px] object-cover order-first lg:order-last"
							/>
						</div>
						{/* line */}

						<div className="border border-solid border-ClGray w-full "></div>

						{/* News Section row-2*/}

						<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
							<div className="flex flex-col item-start gap-[16px]">
								<img src={NC2} alt="" className="h-[166px] w-[296px]" />
								<NewsType2></NewsType2>
								<div className="flex items-center gap-[8px] ">
									<div className="text-sm text-CGray">
										<NewsTime></NewsTime>
									</div>
									<img src={Ellipse} alt="" />
									<p className="text-sm text-COrange font-bold">
										<NewsTags></NewsTags>
									</p>
								</div>
							</div>
							<div className="border border-solid border-ClGray h-full "></div>
							<div className="flex flex-col item-start gap-[16px]">
								<img src={NC3} alt="" className="h-[166px] w-[296px]" />
								<NewsType2></NewsType2>
								<div className="flex items-center gap-[8px] ">
									<div className="text-sm text-CGray">
										<NewsTime></NewsTime>
									</div>
									<img src={Ellipse} alt="" />
									<p className="text-sm text-COrange font-bold">
										<NewsTags></NewsTags>
									</p>
								</div>
							</div>
							<div className="border border-solid border-ClGray h-full "></div>
							<div className="flex sm:hidden lg:flex flex-col item-start gap-[16px]">
								<img src={NC4} alt="" className="h-[166px] w-[296px]" />
								<NewsType2></NewsType2>
								<div className="flex items-center gap-[8px] ">
									<div className="text-sm text-CGray">
										<NewsTime></NewsTime>
									</div>
									<img src={Ellipse} alt="" />
									<p className="text-sm text-COrange font-bold">
										<NewsTags></NewsTags>
									</p>
								</div>
							</div>
						</div>
						<div className="border border-solid border-ClGray w-full "></div>

						{/* News Section row-3*/}

						<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
							<NewsType3></NewsType3>
							<div className="border border-solid border-ClGray h-full "></div>
							<NewsType3></NewsType3>
							<div className="border border-solid border-ClGray h-full "></div>
							<div className="block sm:hidden lg:block">
								<NewsType3></NewsType3>
							</div>
						</div>
					</div>

					<div className="border border-solid border-ClGray "></div>

					{/* Side Navigation*/}

					<div className="flex flex-col items-center xl:items-start gap-4 ">
						{/* ADS */}
						<img src={AD2} alt="" className="w-[297px] h-[248px] shrink-0" />
						<div className="border border-solid border-ClGray "></div>

						{/* Latest News Nav Section */}

						<div className="flex items-start gap-[15px] w-[296px] border-b border-solid border-ClGray">
							<div className="flex pb-[8px] justify-center items-center gap-[10px] border-b-2 border-solid border-COrange ">
								<a href="#" className="text-CBlue text-center ">
									সর্বশেষ
								</a>
							</div>
							<div className="flex pb-[8px] justify-center items-center gap-[10px] hover:border-b-2 border-solid border-COrange ">
								<a href="#" className="text-CGray hover:text-CBlue text-center ">
									দিনের সেরা
								</a>
							</div>
							<div className="flex pb-[8px] justify-center items-center gap-[10px] hover:border-b-2 border-solid border-COrange ">
								<a href="#" className=" text-CGray hover:text-CBlue text-center ">
									সপ্তাহের সেরা
								</a>
							</div>
						</div>

						{/* Latest News Section */}

						<div className="inline-flex flex-col items-start gap-[10px]">
							<div className="flex flex-col items-start">
								<div className="text-CGray text-center text-4xl font-bold leading-[50px]">১</div>
								<div className="text-COrange text-lg">
									<NewsHeadline></NewsHeadline>
								</div>
							</div>
							<div className="border border-solid border-ClGray w-full"></div>
							<div className="flex flex-col items-start">
								<div className="text-CGray text-center text-4xl font-bold leading-[50px]">২</div>
								<div className="text-CBlue hover:text-COrange text-lg">
									<NewsHeadline></NewsHeadline>
								</div>
							</div>
							<div className="border border-solid border-ClGray w-full"></div>
							<div className="flex flex-col items-start">
								<div className="text-CGray text-center text-4xl font-bold leading-[50px]">৩</div>
								<div className="text-CBlue hover:text-COrange text-lg">
									<NewsHeadline></NewsHeadline>
								</div>
							</div>
							<div className="border border-solid border-ClGray w-full"></div>
							<div className="flex flex-col items-start">
								<div className="text-CGray text-center text-4xl font-bold leading-[50px]">৪</div>
								<div className="text-CBlue hover:text-COrange text-lg">
									<NewsHeadline></NewsHeadline>
								</div>
							</div>
							<div className="border border-solid border-ClGray w-full"></div>
							<div className="flex flex-col items-start">
								<div className="text-CGray text-center text-4xl font-bold leading-[50px]">৫</div>
								<div className="text-CBlue hover:text-COrange text-lg">
									<NewsHeadline></NewsHeadline>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TopSection;
