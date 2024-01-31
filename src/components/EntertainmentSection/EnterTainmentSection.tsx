import NC1 from "../../assets/images/News/newsCover9.jpg";
import NC2 from "../../assets/images/News/newsCover10.jpg";
import NC3 from "../../assets/images/News/newsCover11.jpg";
import NC4 from "../../assets/images/News/newsCover5.jpg";
import NC5 from "../../assets/images/News/newsCover6.jpg";
import NC6 from "../../assets/images/News/newsCover12.jpg";
import NC7 from "../../assets/images/News/newsCover13.jpg";

import AD6 from "../../assets/images/ads/ad6.png";
import Ellipse from "../../assets/images/icons/ellipse2.svg";

import NewsHeadline from "../News/NewsHeadline";
import NewsBody from "../News/NewsBody";
import NewsTime from "../News/NewsTime";
import NewsType2 from "../News/NewsType/NewsType2";

const EnterTainmentSection = () => {
	return (
		<section>
			{/* Section Body */}

			<div className="grid grid-cols-1 sm:grid-cols-[2fr] md:grid-cols-[3fr] lg:grid-cols-[3fr_auto_1fr] gap-4 my-6">
				{/* News Section */}
				<div className="grid grid-rows-[auto_auto_1fr] gap-4">
					{/* News Row 1 */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
						{/* News 1 */}
						<div className="inline-flex flex-col items-start gap-4 sm:col-span-2">
							<img className="w-full h-52 sm:h-[350px] object-cover" src={NC1} />
							<div className="flex flex-col items-start gap-5 ">
								<div className="flex flex-col items-start gap-4 ">
									<h1 className=" text-CBlue hover:text-COrange text-2xl font-bold ">
										<NewsHeadline></NewsHeadline>
									</h1>
									<p className="text-CGray line-clamp-3 ">
										<NewsBody></NewsBody>
									</p>
								</div>
								<div className="flex items-center gap-2 ">
									<p className="text-sm text-CGray">
										<NewsTime></NewsTime>
									</p>
									<img src={Ellipse} alt="" />
									<a href="#" className="text-sm text-COrange font-bold">
										বলিউড
									</a>
								</div>
							</div>
						</div>
						{/* Divider */}
						<div className="flex flex-col sm:flex-row md:flex-col items-start sm:col-span-2 md:col-span-1  gap-8">
							{/* News 2 */}
							<div className="flex flex-col items-start gap-4">
								<img className="w-full h-40 object-cover" src={NC2} />
								<div className="flex flex-col items-start gap-4">
									<p className="text-lg hover:text-COrange font-bold text-CBlue">
										<NewsHeadline />
									</p>
									<div className="flex items-center gap-2">
										<p className="text-sm text-CGray">
											<NewsTime></NewsTime>
										</p>
										<img src={Ellipse} alt="" />
										<a href="#" className="text-sm text-COrange font-bold">
											হলিউড
										</a>
									</div>
								</div>
							</div>
							{/* Divider */}
							{/* News 3 */}
							<div className="flex flex-col items-start gap-4">
								<img className="w-full h-40 object-cover" src={NC3} />
								<div className="flex flex-col items-start gap-4">
									<p className="text-lg hover:text-COrange font-bold text-CBlue">
										<NewsHeadline />
									</p>
									<div className="flex items-center gap-2">
										<p className="text-sm text-CGray">
											<NewsTime></NewsTime>
										</p>
										<img src={Ellipse} alt="" />
										<a href="#" className="text-sm text-COrange font-bold">
											টলিউড
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Divider */}
					<div className="border border-solid border-ClGray w-full"> </div>
					{/* News Row 2 */}
					<div className="flex flex-col sm:flex-row gap-4">
						{/* News 4*/}
						<div className="flex flex-col item-start gap-4">
							<img src={NC4} alt="" className="h-40 w-full object-cover" />
							<NewsType2></NewsType2>
							<div className="flex items-center gap-2 ">
								<div className="text-sm text-CGray">
									<NewsTime></NewsTime>
								</div>
								<img src={Ellipse} alt="" />
								<a href="#" className="text-sm text-COrange font-bold">
									হলিউড
								</a>
							</div>
						</div>
						{/* Divider */}
						{/* News 5*/}
						<div className="flex flex-col item-start gap-4">
							<img src={NC5} alt="" className="h-40 w-full object-cover" />
							<NewsType2></NewsType2>
							<div className="flex items-center gap-2 ">
								<div className="text-sm text-CGray">
									<NewsTime></NewsTime>
								</div>
								<img src={Ellipse} alt="" />
								<a href="#" className="text-sm text-COrange font-bold">
									বলিউড
								</a>
							</div>
						</div>
						{/* Divider */}
						{/* News 6*/}
						<div className="flex sm:hidden md:flex flex-col item-start gap-4">
							<img src={NC6} alt="" className="h-40 w-full object-cover" />
							<NewsType2></NewsType2>
							<div className="flex items-center gap-2 ">
								<div className="text-sm text-CGray">
									<NewsTime></NewsTime>
								</div>
								<img src={Ellipse} alt="" />
								<a href="#" className="text-sm text-COrange font-bold">
									হলিউড
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* Divider */}
				<div className="border border-solid border-ClGray lg:h-full"></div>
				{/* Side Section */}

				<div className="flex flex-col gap-4">
					{/* Voting section */}

					<div className="inline-flex flex-col justify-center items-center gap-4">
						<div className="flex flex-col items-start gap-4">
							<h3 className="text-CBlue font-bold">অনলাইন ভোট</h3>
							<div className="border border-solid border-ClGray w-full"> </div>
							<div className="flex flex-col item-start gap-2">
								<img className="w-full h-44 object-cover mx-auto" src={NC7} />
								<p className="text-sm text-CGray">
									ইউক্রেনের শস্য রপ্তানির জন্য কৃষ্ণসাগরের বন্দরগুলো খুলে দিতে জাতিসংঘ-সমর্থিত একটি
									চুক্তি করেছে রাশিয়া ও ইউক্রেন। ইউক্রেনে রুশ হামলা শুরুর পর বিশ্বজুড়ে যে খাদ্যসংকট
									দেখা দিয়েছে, এ চুক্তির ফলে তা কেটে যাবে বলে আপনি মনে করেন কি?
								</p>
							</div>
						</div>
						<div className="flex flex-col items-start gap-5 w-full">
							<div className="flex flex-col items-start gap-4 w-full">
								{/* Option 1 */}
								<div className="h-[30px] w-full bg-ClOrange rounded relative">
									<div className="inline-flex items-center gap-[10px] py-[6px] px-[15px] z-10 relative">
										<input
											id="vote-option-1"
											type="radio"
											name="vote"
											value="হ্যাঁ"
											aria-labelledby="vote-option-1"
											aria-describedby="vote-option-1"
										/>
										<label htmlFor="vote-option-1" className="text-xs text-CGray left-10 absolute">
											হ্যাঁ
										</label>
									</div>
									<div className="absolute top-0 right-0 w-[18%] h-[30px] bg-ClGray"></div>
									<p className="absolute top-[6px] right-[15px]  text-xs text-CGray text-right font-semibold">
										৮২%
									</p>
								</div>
								{/* Option 2 */}
								<div className="h-[30px] w-full bg-ClOrange rounded-[4px] relative">
									<div className="inline-flex items-center gap-[10px] py-[6px] px-[15px] z-10  relative">
										<input
											id="vote-option-2"
											type="radio"
											name="vote"
											value="না"
											aria-labelledby="vote-option-2"
											aria-describedby="vote-option-2"
										/>
										<label htmlFor="vote-option-2" className="text-xs text-CGray left-10 absolute">
											না
										</label>
									</div>
									<div className="absolute top-0 right-0 w-[84%] h-[30px] bg-ClGray"></div>
									<p className="absolute top-[6px] right-[15px]  text-xs text-CGray text-right font-semibold">
										১৬%
									</p>
								</div>
								{/* Option 3 */}
								<div className="h-[30px] w-full bg-ClOrange rounded-[4px] relative">
									<div className="inline-flex items-center gap-[10px] py-[6px] px-[15px] z-10 relative">
										<input
											id="vote-option-3"
											type="radio"
											name="vote"
											value="মন্তব্য নেই"
											aria-labelledby="vote-option-3"
											aria-describedby="vote-option-3"
										/>
										<label
											htmlFor="vote-option-3"
											className="text-xs text-nowrap text-CGray left-10  absolute"
										>
											মন্তব্য নেই
										</label>
									</div>
									<div className="absolute top-0 right-0 w-[98%] h-[30px] bg-ClGray"></div>
									<p className="absolute top-[6px] right-[15px]  text-xs text-CGray text-right font-semibold">
										২%
									</p>
								</div>
							</div>
							<button className="w-full font-bold text-white rounded bg-CBlue px-4 py-2">
								ভোট
							</button>
						</div>
					</div>
					<div className="border border-solid border-ClGray w-full"> </div>
					{/* Ads */}
					<div>
						<img className="mx-auto object-cover" src={AD6} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default EnterTainmentSection;
