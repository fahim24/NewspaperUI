import NewsHeadline from "../News/NewsHeadline";

import NewsType1 from "../News/NewsType/NewsType1";
import NewsType2 from "../News/NewsType/NewsType2";
import NewsType3 from "../News/NewsType/NewsType3";

import NC1 from "../../assets/images/News/newsCover1.png";
import NC2 from "../../assets/images/News/newsCover2.jpg";
import NC3 from "../../assets/images/News/newsCover3.jpg";
import NC4 from "../../assets/images/News/newsCover4.jpg";
import AD2 from "../../assets/images/ads/ad2.png";

const TopSection = () => {
	return (
		<section>
			<div className="w-[1280px] mx-auto">
				<div className="border border-solid border-ClGray w-full mb-[24px]"></div>
				<div className="flex gap-[16px]">
					{/* News Section row-1*/}

					<div className="flex flex-col gap-[16px]">
						<div className="flex gap-[20px]">
							<NewsType1></NewsType1>
							<img src={NC1} alt="cover" className="h-[350px]" />
						</div>
						<div className="border border-solid border-ClGray w-full "></div>

						{/* News Section row-2*/}

						<div className="flex gap-[16px]">
							<div className="flex flex-col item-start gap-[16px]">
								<img src={NC2} alt="" className="h-[166px] w-[296px]" />
								<NewsType2></NewsType2>
							</div>
							<div className="border border-solid border-ClGray h-full "></div>
							<div className="flex flex-col item-start gap-[16px]">
								<img src={NC3} alt="" className="h-[166px] w-[296px]" />
								<NewsType2></NewsType2>
							</div>
							<div className="border border-solid border-ClGray h-full "></div>
							<div className="flex flex-col item-start gap-[16px]">
								<img src={NC4} alt="" className="h-[166px] w-[296px]" />
								<NewsType2></NewsType2>
							</div>
						</div>
						<div className="border border-solid border-ClGray w-full "></div>

						{/* News Section row-3*/}

						<div className="flex gap-[16px]">
							<NewsType3></NewsType3>
							<div className="border border-solid border-ClGray h-full "></div>
							<NewsType3></NewsType3>
							<div className="border border-solid border-ClGray h-full "></div>
							<NewsType3></NewsType3>
						</div>
					</div>

					<div className="border border-solid border-ClGray "></div>

					{/* Side Navigation*/}

					<div className="flex flex-col gap-[16px] ">
						{/* ADS */}
						<img src={AD2} alt="" className="w-[297px] h-[248px] shrink-0" />
						<div className="border border-solid border-ClGray "></div>

						{/* Latest News Nav Section */}

						<div className="flex items-start gap-[15px] w-[296px] border-b border-solid border-ClGray">
							<div className="flex pb-[8px] justify-center items-center gap-[10px] border-b-2 border-solid border-COrange ">
								<a className="text-CBlue text-center ">সর্বশেষ</a>
							</div>
							<div className="flex pb-[8px] justify-center items-center gap-[10px] hover:border-b-2 border-solid border-COrange ">
								<a className="text-CGray hover:text-CBlue text-center ">দিনের সেরা</a>
							</div>
							<div className="flex pb-[8px] justify-center items-center gap-[10px] hover:border-b-2 border-solid border-COrange ">
								<a className=" text-CGray hover:text-CBlue text-center ">সপ্তাহের সেরা</a>
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
