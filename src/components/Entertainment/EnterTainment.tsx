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

const EnterTainment = () => {
	return (
		<section>
			<div className="container mx-auto ">
				{/* Section Head */}

				<div className="flex justify-center items-center gap-6">
					<div className="border border-solid border-ClGray w-full"> </div>
					<div className="text-CBlue hover:text-COrange items-center text-2xl font-bold">
						বিনোদন
					</div>
					<div className="border border-solid border-ClGray w-full"> </div>
				</div>
				{/* Section Body */}

				<div className="flex flex-col xl:flex-row gap-4 my-6">
					{/* News Section */}

					<div className="flex flex-col gap-4">
						{/* News Row 1 */}

						<div className="flex flex-col lg:flex-row gap-4">
							{/* News 1 */}
							<div className="inline-flex flex-col items-start gap-4 w-[624px] ">
								<img className="w-full h-[350px] object-cover" src={NC1} />
								<div className="flex flex-col items-start gap-5 self-stretch">
									<div className="flex flex-col items-start gap-4 self-stretch">
										<h1 className=" text-CBlue hover:text-COrange text-2xl font-bold self-stretch;">
											<NewsHeadline></NewsHeadline>
										</h1>
										<p className="text-CGray line-clamp-3 self-stretch">
											<NewsBody></NewsBody>
										</p>
									</div>
									<div className="flex items-center gap-2 ">
										<p className="text-sm text-CGray">
											<NewsTime></NewsTime>
										</p>
										<img src={Ellipse} alt="" />
										<p className="text-sm text-COrange font-bold">বলিউড</p>
									</div>
								</div>
							</div>
							<div className="border border-solid border-ClGray h-full"> </div>
							<div className="flex flex-col sm:flex-row lg:flex-col items-start gap-4">
								{/* News 2 */}

								<div className="flex flex-col items-start gap-4 w-[296px]">
									<img className="w-full h-[166px] object-cover" src={NC2} />
									<div className="flex flex-col items-start gap-4">
										<p className="text-lg hover:text-COrange font-bold text-CBlue">
											<NewsHeadline />
										</p>
										<div className="flex items-center gap-2">
											<p className="text-sm text-CGray">
												<NewsTime></NewsTime>
											</p>
											<img src={Ellipse} alt="" />
											<p className="text-sm text-COrange font-bold">হলিউড</p>
										</div>
									</div>
								</div>
								<div className="border border-solid border-ClGray w-full"> </div>
								{/* News 3 */}

								<div className="flex flex-col items-start gap-4 w-[296px]">
									<img className="w-full h-[166px] object-cover" src={NC3} />
									<div className="flex flex-col items-start gap-4">
										<p className="text-lg hover:text-COrange font-bold text-CBlue">
											<NewsHeadline />
										</p>
										<div className="flex items-center gap-2">
											<p className="text-sm text-CGray">
												<NewsTime></NewsTime>
											</p>
											<img src={Ellipse} alt="" />
											<p className="text-sm text-COrange font-bold">টলিউড</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Line */}

						<div className="border border-solid border-ClGray w-full"> </div>
						{/* News Row 2 */}

						<div className="flex flex-wrap gap-4">
							{/* News 4*/}

							<div className="flex flex-col item-start gap-4">
								<img src={NC4} alt="" className="h-[166px] w-full object-cover" />
								<NewsType2></NewsType2>
								<div className="flex items-center gap-2 ">
									<div className="text-sm text-CGray">
										<NewsTime></NewsTime>
									</div>
									<img src={Ellipse} alt="" />
									<p className="text-sm text-COrange font-bold">হলিউড</p>
								</div>
							</div>
							<div className="border border-solid border-ClGray h-full "></div>
							{/* News 5*/}
							<div className="flex flex-col item-start gap-4">
								<img src={NC5} alt="" className="h-[166px] w-[296px] object-cover" />
								<NewsType2></NewsType2>
								<div className="flex items-center gap-2 ">
									<div className="text-sm text-CGray">
										<NewsTime></NewsTime>
									</div>
									<img src={Ellipse} alt="" />
									<p className="text-sm text-COrange font-bold">বলিউড</p>
								</div>
							</div>
							<div className="border border-solid border-ClGray h-full "></div>
							{/* News 6*/}
							<div className="flex flex-col item-start gap-[16px]">
								<img src={NC6} alt="" className="h-[166px] w-[296px] object-cover" />
								<NewsType2></NewsType2>
								<div className="flex items-center gap-2 ">
									<div className="text-sm text-CGray">
										<NewsTime></NewsTime>
									</div>
									<img src={Ellipse} alt="" />
									<p className="text-sm text-COrange font-bold">হলিউড</p>
								</div>
							</div>
						</div>
					</div>

					<div className="border border-solid border-ClGray  "> </div>
					{/* Side Section */}

					<div className="flex flex-col gap-4 w-[296px]">
						{/* Voting section */}

						<div className="inline-flex flex-col justify-center items-center gap-4">
							<div className="flex flex-col items-start gap-4">
								<h3 className="text-CBlue font-bold">অনলাইন ভোট</h3>
								<div className="border border-solid border-ClGray w-full"> </div>
								<div className="flex flex-col item-start gap-2">
									<img className="w-[296px] h-[170px] object-cover" src={NC7} />
									<p className="text-sm text-CGray">
										ইউক্রেনের শস্য রপ্তানির জন্য কৃষ্ণসাগরের বন্দরগুলো খুলে দিতে জাতিসংঘ-সমর্থিত
										একটি চুক্তি করেছে রাশিয়া ও ইউক্রেন। ইউক্রেনে রুশ হামলা শুরুর পর বিশ্বজুড়ে যে
										খাদ্যসংকট দেখা দিয়েছে, এ চুক্তির ফলে তা কেটে যাবে বলে আপনি মনে করেন কি?
									</p>
								</div>
							</div>
							<div className="flex flex-col items-start gap-5">
								<div className="flex flex-col items-start gap-4">
									{/* Option 1 */}
									<div className="h-[30px] w-[296px] bg-ClOrange rounded-[4px] relative">
										<div className="inline-flex items-center gap-[10px] py-[6px] px-[15px]">
											<input
												id="vote-option-1"
												type="radio"
												name="vote"
												value="হ্যাঁ"
												aria-labelledby="vote-option-1"
												aria-describedby="vote-option-1"
												checked
											/>
											<label htmlFor="vote-option-1" className="text-xs text-CGray">
												হ্যাঁ
											</label>
										</div>
										<div className="absolute top-0 right-0 w-[87px] h-[30px] bg-ClGray"></div>
										<p className="absolute top-[6px] right-[15px]  text-xs text-CGray text-right font-semibold">
											৮২%
										</p>
									</div>
									{/* Option 2 */}
									<div className="h-[30px] w-[296px] bg-ClOrange rounded-[4px] relative">
										<div className="inline-flex items-center gap-[10px] py-[6px] px-[15px] absolute top-0 left-0 ">
											<input
												id="vote-option-2"
												type="radio"
												name="vote"
												value="না"
												aria-labelledby="vote-option-2"
												aria-describedby="vote-option-2"
											/>
											<label htmlFor="vote-option-2" className="text-xs text-CGray">
												না
											</label>
										</div>
										<div className="absolute top-0 right-0 w-[245px] h-[30px] bg-ClGray"></div>
										<p className="absolute top-[6px] right-[15px]  text-xs text-CGray text-right font-semibold">
											১৬%
										</p>
									</div>
									{/* Option 3 */}
									<div className="h-[30px] w-[296px] bg-ClGray rounded-[4px] relative">
										<div className="absolute top-0 left-0 w-[9px] h-[30px] bg-ClOrange"></div>
										<div className="inline-flex items-center gap-[10px] py-[6px] px-[15px]">
											<input
												id="vote-option-3"
												type="radio"
												name="vote"
												value="মন্তব্য নেই"
												aria-labelledby="vote-option-3"
												aria-describedby="vote-option-3"
											/>
											<label htmlFor="vote-option-3" className="text-xs text-CGray">
												মন্তব্য নেই
											</label>
										</div>

										<p className="absolute top-[6px] right-[15px]  text-xs text-CGray text-right font-semibold">
											৮২%
										</p>
									</div>
								</div>
								<button className="flex h-[40px] w-[296px] justify-center items-center gap-[10px] font-bold text-white rounded-[4px] bg-CBlue">
									ভোট
								</button>
							</div>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						{/* Ads */}
						<div>
							<img className="w-[296px] h-[246px] object-cover" src={AD6} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EnterTainment;
