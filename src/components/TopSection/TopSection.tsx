import Adtype2 from "../Ads/AdType2/Adtype2";
import NewsHeadline from "../News/NewsHeadline";
import NewsCover from "../News/NewsCover";
import NewsType1 from "../News/NewsType/NewsType1";
import NewsType2 from "../News/NewsType/NewsType2";

const TopSection = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 md:w-10/12 mx-auto gap-3 border-t-2 border-solid border-gray-200 py-2">
			<div className="col-span-1 sm:col-span-2 md:col-span-3">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 col-span-1 sm:col-span-2 md:col-span-3 gap-3 border-b-2 border-solid border-gray-200 py-2 order-last sm:order-first">
					<NewsType2></NewsType2>
					<span className="col-span-1 md:col-span-2 order-first sm:order-last">
						<NewsCover></NewsCover>
					</span>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 gap-2 border-b-2 border-solid border-gray-200 py-2">
					<div className="border-r-2 border-solid border-gray-200 pr-2">
						<NewsType1></NewsType1>
					</div>
					<div className="hidden md:block px-2">
						<NewsType1></NewsType1>
					</div>
					<div className="border-l-2 border-solid border-gray-200 pl-2">
						<NewsType1></NewsType1>
					</div>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 gap-2 border-b-2 border-solid border-gray-200 py-2">
					<div className="border-r-2 border-solid border-gray-200 pr-2">
						<NewsType2></NewsType2>
					</div>
					<div className="hidden md:block px-2">
						<NewsType2></NewsType2>
					</div>
					<div className="border-l-2 border-solid border-gray-200 pl-2">
						<NewsType2></NewsType2>
					</div>
				</div>
			</div>
			<div className="lg:border-l-2 border-solid lg:pl-2 ">
				<Adtype2></Adtype2>

				<div className="flex flex-wrap items-center justify-center gap-5 border-t-2 border-b-2 border-solid w-full py-2 m-2 text-xs">
					<div className="hover:text-orange-400">
						<a className=" hover:border-b-2 hover:border-orange-500">সর্বশেষ</a>
					</div>
					<div className="hover:text-orange-400">
						<a className=" hover:border-b-2 hover:border-orange-500">দিনের সেরা</a>
					</div>
					<div className="hover:text-orange-400">
						<a className=" hover:border-b-2 hover:border-orange-500">সপ্তাহের সেরা</a>
					</div>
				</div>

				<div>
					<div className=" border-b-2 border-solid hover:text-orange-400 p-2">
						<h1 className="font-bold text-xl text-gray-500 p-2">১</h1>
						<p className="text-sm line-clamp-3">
							<NewsHeadline></NewsHeadline>
						</p>
					</div>
					<div className=" border-b-2 border-solid hover:text-orange-400 p-2">
						<h1 className="font-bold text-xl text-gray-500 p-2 ">২</h1>
						<p className="text-sm line-clamp-3">
							<NewsHeadline></NewsHeadline>
						</p>
					</div>
					<div className=" border-b-2 border-solid hover:text-orange-400 p-2">
						<h1 className="font-bold text-xl text-gray-500 p-2 ">৩</h1>
						<p className="text-sm line-clamp-3">
							<NewsHeadline></NewsHeadline>
						</p>
					</div>
					<div className=" border-b-2 border-solid hover:text-orange-400 p-2">
						<h1 className="font-bold text-xl text-gray-500 p-2 ">৪</h1>
						<p className="text-sm line-clamp-3">
							<NewsHeadline></NewsHeadline>
						</p>
					</div>
					<div className="hover:text-orange-400 p-2">
						<h1 className="font-bold text-xl text-gray-500 p-2 ">৫</h1>
						<p className="text-sm line-clamp-3">
							<NewsHeadline></NewsHeadline>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopSection;
