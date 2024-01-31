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
			{/* Divider */}
			<div className="border border-solid border-ClGray w-full my-6"></div>
			{/* Content Section */}
			<div className="grid grid-cols-[1fr] sm:grid-cols-[3fr] lg:grid-cols-[3fr_auto_1fr] gap-4 items-start">
				{/* News Section */}
				<div className="grid grid-rows-[auto_auto_1fr_auto_auto] gap-4">
					{/* News Section row-1*/}
					{/* News 1 */}
					<article className="grid grid-cols-1 sm:grid-cols-3 gap-5">
						{/* News Content */}
						<div className="flex flex-col items-start gap-5 order-last sm:order-first">
							{/* News Body */}
							<div className="flex flex-col items-start gap-6">
								{/* News Headline */}
								<h1 className=" text-CBlue hover:text-COrange text-2xl font-bold  line-clamp-3">
									<NewsHeadline></NewsHeadline>
								</h1>
								{/* News Details */}
								<p className=" text-CGray line-clamp-8">
									<NewsBody></NewsBody>
								</p>
							</div>
							{/* News Footer */}
							<div className="flex items-center gap-2 ">
								{/* News Time */}
								<p className="text-sm text-CGray">
									<NewsTime></NewsTime>
								</p>
								{/* Divider */}
								<img src={Ellipse} alt="ellipse" />
								{/* News Tag */}
								<p className="text-sm text-COrange font-bold">
									<NewsTags></NewsTags>
								</p>
							</div>
						</div>
						{/* News Cover */}
						<img
							src={NC1}
							alt="news cover"
							className="col-span-1 sm:col-span-2 object-cover order-first sm:order-last"
						/>
					</article>
					{/* Divider */}
					<div className="border border-solid border-ClGray w-full "></div>
					{/* News Section row-2*/}
					<div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_auto_1fr] md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4">
						{/* News 2 */}
						<article className="flex flex-col item-start gap-4">
							{/* News Cover */}
							<img src={NC2} alt="News Cover" className="h-44 object-cover" />
							{/* News Body */}
							<NewsType2></NewsType2>
							{/* News Footer */}
							<div className="flex items-center gap-2 ">
								{/* News Time */}
								<div className="text-sm text-CGray">
									<NewsTime></NewsTime>
								</div>
								{/* Divider */}
								<img src={Ellipse} alt="ellipse" />
								{/* News Tag */}
								<p className="text-sm text-COrange font-bold">
									<NewsTags></NewsTags>
								</p>
							</div>
						</article>
						{/* Divider */}
						<div className="border border-solid border-ClGray w-full sm:h-full"></div>
						{/* News 3 */}
						<article className="flex flex-col item-start gap-4">
							{/* News Cover */}
							<img src={NC3} alt="News Cover" className="h-44 object-cover" />
							{/* News Body */}
							<NewsType2></NewsType2>
							{/* News Footer */}
							<div className="flex items-center gap-2 ">
								{/* News Time */}
								<div className="text-sm text-CGray">
									<NewsTime></NewsTime>
								</div>
								{/* Divider */}
								<img src={Ellipse} alt="" />
								{/* News Tag */}
								<p className="text-sm text-COrange font-bold">
									<NewsTags></NewsTags>
								</p>
							</div>
						</article>
						{/* Divider */}
						<div className="border border-solid border-ClGray w-full sm:w-0 md:h-full"></div>
						{/* News 4 */}
						<div className="flex sm:hidden md:flex flex-col item-start gap-4">
							{/* News Cover */}
							<img src={NC4} alt="" className="h-44 object-cover" />
							{/* News Body */}
							<NewsType2></NewsType2>
							{/* News Footer */}
							<div className="flex items-center gap-2 ">
								{/* News Time */}
								<div className="text-sm text-CGray">
									<NewsTime></NewsTime>
								</div>
								{/* Didiver */}
								<img src={Ellipse} alt="" />
								{/* News Tag */}
								<p className="text-sm text-COrange font-bold">
									<NewsTags></NewsTags>
								</p>
							</div>
						</div>
					</div>
					{/* Divider */}
					<div className="border border-solid border-ClGray w-full "></div>
					{/* News Section row-3*/}
					<div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_auto_1fr] md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4">
						{/* News 5 */}
						<NewsType3></NewsType3>
						{/* Divider */}
						<div className="border border-solid border-ClGray w-full sm:h-full"></div>
						{/* News 6 */}
						<NewsType3></NewsType3>
						{/* Divider */}
						<div className="border border-solid border-ClGray w-full sm:w-0 md:h-full"></div>
						{/* News 7 */}
						<div className="block sm:hidden md:block">
							<NewsType3></NewsType3>
						</div>
					</div>
				</div>
				{/* Divider */}
				<div className="border border-solid border-ClGray h-full "></div>
				{/* SideBar*/}
				<div className="flex flex-col items-start gap-4">
					{/* ADS */}
					<img src={AD2} alt="" className="object-cover mx-auto" />
					{/* Latest News Nav Section */}
					<div className="flex items-start gap-4 w-full border-b border-t border-solid border-ClGray">
						{/* Nav Link - 1 */}
						<a
							href="#"
							title="See Latest News"
							className="py-2 border-b-2 border-solid border-COrange text-CBlue text-center"
						>
							সর্বশেষ
						</a>
						{/* Nav Link - 2 */}
						<a
							href="#"
							title="See Daily Best News"
							className=" py-2 hover:border-b-2 border-solid border-COrange text-CGray hover:text-CBlue text-center"
						>
							দিনের সেরা
						</a>
						{/* Nav Link - 3 */}
						<a
							href="#"
							title="See Weekly Best News"
							className="py-2 hover:border-b-2 border-solid border-COrange text-CGray hover:text-CBlue text-center"
						>
							সপ্তাহের সেরা
						</a>
					</div>
					{/* Latest News Content Section */}
					<div className="inline-flex flex-col items-start gap-2">
						{/* News Headline 1 */}
						<div className="flex flex-col items-start gap-2">
							<div className="text-CGray text-center text-4xl font-bold ">১</div>
							<div className="text-COrange text-lg">
								<NewsHeadline></NewsHeadline>
							</div>
						</div>
						{/* Divider */}
						<div className="border border-solid border-ClGray w-full"></div>
						{/* News Headline 2 */}
						<div className="flex flex-col items-start gap-2">
							<div className="text-CGray text-center text-4xl font-bold ">২</div>
							<div className="text-CBlue hover:text-COrange text-lg">
								<NewsHeadline></NewsHeadline>
							</div>
						</div>
						{/* Divider */}
						<div className="border border-solid border-ClGray w-full"></div>
						{/* News Headline 3 */}
						<div className="flex flex-col items-start gap-2">
							<div className="text-CGray text-center text-4xl font-bold ">৩</div>
							<div className="text-CBlue hover:text-COrange text-lg">
								<NewsHeadline></NewsHeadline>
							</div>
						</div>
						{/* Divider */}
						<div className="border border-solid border-ClGray w-full"></div>
						{/* News Headline 4 */}
						<div className="flex flex-col items-start gap-2">
							<div className="text-CGray text-center text-4xl font-bold ">৪</div>
							<div className="text-CBlue hover:text-COrange text-lg">
								<NewsHeadline></NewsHeadline>
							</div>
						</div>
						{/* Divider */}
						<div className="border border-solid border-ClGray w-full"></div>
						{/* News Headline 5 */}
						<div className="flex flex-col items-start gap-2">
							<div className="text-CGray text-center text-4xl font-bold ">৫</div>
							<div className="text-CBlue hover:text-COrange text-lg">
								<NewsHeadline></NewsHeadline>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TopSection;
