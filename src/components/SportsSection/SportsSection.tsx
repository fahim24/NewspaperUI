import Adtype2 from "../Ads/AdType2/Adtype2";
import NewsType1 from "../News/NewsType/NewsType1";
import Down from "../../assets/caret-down.svg";
import NewsType3 from "../News/NewsType/NewsType3";

const SportsSection = () => {
	return (
		<div className="w-11/12 md:w-10/12 mx-auto">
			<div className="flex items-center justify-around my-5 ">
				<div className="border border-solid border-gray-200 m-2 w-full"> </div>
				<h1 className="text-xl font-bold hover:text-orange-400">খেলাধুলা</h1>
				<div className="border border-solid border-gray-200 m-2 w-full"> </div>
			</div>

			<div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 ">
				<div className="col-span-2 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-3 ">
					<div className="col-span-2 border-r-2  border-solid border-gray-200 pr-4 py-4">
						<NewsType3></NewsType3>
					</div>
					<div className="border-r-2 pr-2 md:border-b-2 border-solid border-gray-200 md:mb-2">
						<NewsType1></NewsType1>
					</div>
					<div className="md:border-r-2 border-solid border-gray-200 md:pr-2">
						<NewsType1></NewsType1>
					</div>
					<div className="border-r-2 pr-2 border-solid border-gray-200">
						<NewsType1></NewsType1>
					</div>
					<div className="md:border-l-2 border-solid border-gray-200 md:pl-2">
						<NewsType1></NewsType1>
					</div>
				</div>

				<div className="border-l-2 border-solid border-gray-200 pl-2">
					<div className="border-b-2 border-solid border-gray-200 px-2 mb-4">
						<div className="my-2 border-b-2 border-solid border-gray-200 p-2">
							<h1 className="text-md font-semibold">আমার এলাকার খবর</h1>
						</div>

						<button className="inline-flex justify-around w-full p-2 text-sm text-gray-500 bg-white border border-gray-200 rounded-md my-2">
							<span>বিভাগ</span>
							<span className="w-5 h-5 ">
								<img src={Down} alt="" />
							</span>
						</button>
						<button className="inline-flex justify-around w-full p-2 text-sm text-gray-500 bg-white border border-gray-200 rounded-md my-2">
							<span className="mr-2">জেলা</span>
							<span className="w-5 h-5">
								<img src={Down} alt="" />
							</span>
						</button>
						<button className="inline-flex justify-around w-full p-2 text-sm text-gray-500 bg-white border border-gray-200 rounded-md my-2">
							<span className="mr-2">উপজেলা</span>
							<span className="w-5 h-5">
								<img src={Down} alt="" />
							</span>
						</button>
						<button className="text-white text-sm whitespace-nowrap w-full py-2 bg-orange-400 rounded-md my-2">
							খুঁজুন
						</button>
					</div>
					<Adtype2></Adtype2>
				</div>
			</div>
		</div>
	);
};

export default SportsSection;
