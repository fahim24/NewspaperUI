import AD4 from "../../assets/images/ads/ad4.png";
import NC5 from "../../assets/images/News/newsCover5.jpg";
import NC6 from "../../assets/images/News/newsCover6.jpg";
import NC7 from "../../assets/images/News/newsCover7.jpg";
import NC8 from "../../assets/images/News/newsCover8.jpg";

import NewsType2 from "../News/NewsType/NewsType2";
import NewsType4 from "../News/NewsType/NewsType4";
import NewsType5 from "../News/NewsType/NewsType5";

const SportsSection = () => {
	return (
		<section>
			<div className="w-[1280px] mx-auto ">
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
								<NewsType4></NewsType4>
							</div>
							<div className="border border-solid border-ClGray h-full "></div>
							<div className="flex flex-col item-start gap-[16px]">
								<img src={NC8} alt="" className="h-[166px] w-[296px]" />
								<NewsType5></NewsType5>
							</div>
						</div>
						<div className="border border-solid border-ClGray "></div>
						{/* News Row-2 */}
						<div className="flex gap-[16px]">
							<div className="flex flex-col item-start gap-[16px]">
								<img src={NC5} alt="" className="h-[166px] w-[296px]" />
								<NewsType2></NewsType2>
							</div>
							<div className="border border-solid border-ClGray h-full "></div>
							<div className="flex flex-col item-start gap-[16px]">
								<img src={NC6} alt="" className="h-[166px] w-[296px]" />
								<NewsType2></NewsType2>
							</div>
							<div className="border border-solid border-ClGray h-full "></div>
							<div className="flex flex-col item-start gap-[16px]">
								<img src={NC7} alt="" className="h-[166px] w-[296px]" />
								<NewsType2></NewsType2>
							</div>
						</div>
					</div>
					{/* Side Section */}
					<div>
						<div>f</div>
						<img src={AD4} alt="" className="w-[296px] h-[246px]" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default SportsSection;
