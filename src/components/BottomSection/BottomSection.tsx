import NewsCover from "../News/NewsCover";
import NewsType4 from "../News/NewsType/NewsType4";

const BottomSection = () => {
	return (
		<div className="w-11/12 md:w-10/12 mx-auto mt-5">
			<div className="grid grid-cols-2 md:grid-cols-4 gap-3 border-b-2 border-solid border-gray-200 mb-5 pb-10">
				<div>
					<div className="flex items-center justify-around my-5 ">
						<div className="border border-solid border-gray-200 m-2 w-full"> </div>
						<h1 className="text-xl font-bold hover:text-orange-400">শিক্ষা</h1>
						<div className="border border-solid border-gray-200 m-2 w-full"> </div>
					</div>
					<div className="border-r-2 border-solid border-gray-200 pr-2">
						<NewsCover></NewsCover>
						<NewsType4></NewsType4>
						<div className="border border-solid border-gray-200 mx-auto w-11/12"> </div>
						<NewsType4></NewsType4>
						<div className="border border-solid border-gray-200 mx-auto w-11/12"> </div>
						<NewsType4></NewsType4>
						<div className="border border-solid border-gray-200 mx-auto w-11/12"> </div>
						<NewsType4></NewsType4>
						<div className="border border-solid border-gray-200 mx-auto w-11/12"> </div>
						<NewsType4></NewsType4>
					</div>
				</div>
				<div>
					<div className="flex items-center justify-around my-5 ">
						<div className="border border-solid border-gray-200 m-2 w-full"> </div>
						<h1 className="text-xl font-bold hover:text-orange-400">চাকরি</h1>
						<div className="border border-solid border-gray-200 m-2 w-full"> </div>
					</div>
					<div className="md:border-r-2 border-solid border-gray-200 md:pr-2">
						<NewsCover></NewsCover>
						<NewsType4></NewsType4>
						<div className="border border-solid border-gray-200 mx-auto w-11/12"> </div>
						<NewsType4></NewsType4>
						<div className="border border-solid border-gray-200 mx-auto w-11/12"> </div>
						<NewsType4></NewsType4>
						<div className="border border-solid border-gray-200 mx-auto w-11/12"> </div>
						<NewsType4></NewsType4>
						<div className="border border-solid border-gray-200 mx-auto w-11/12"> </div>
						<NewsType4></NewsType4>
					</div>
				</div>
				<div>
					<div className="flex items-center justify-around my-5 ">
						<div className="border border-solid border-gray-200 m-2 w-full"> </div>
						<h1 className="text-xl font-bold hover:text-orange-400">প্রযুক্তি</h1>
						<div className="border border-solid border-gray-200 m-2 w-full"> </div>
					</div>
					<div className="border-r-2 border-solid border-gray-200 pr-2">
						<NewsCover></NewsCover>
						<NewsType4></NewsType4>
						<div className="border border-solid border-gray-200 mx-auto w-11/12"> </div>
						<NewsType4></NewsType4>
						<div className="border border-solid border-gray-200 mx-auto w-11/12"> </div>
						<NewsType4></NewsType4>
						<div className="border border-solid border-gray-200 mx-auto w-11/12"> </div>
						<NewsType4></NewsType4>
						<div className="border border-solid border-gray-200 mx-auto w-11/12"> </div>
						<NewsType4></NewsType4>
					</div>
				</div>
				<div>
					<div className="flex items-center justify-around my-5 ">
						<div className="border border-solid border-gray-200 m-2 w-full"> </div>
						<h1 className="text-xl font-bold hover:text-orange-400">গ্যাজেটস</h1>
						<div className="border border-solid border-gray-200 m-2 w-full"> </div>
					</div>
					<NewsCover></NewsCover>

					<NewsType4></NewsType4>
					<div className="border border-solid border-gray-200 mx-auto w-11/12"> </div>
					<NewsType4></NewsType4>
					<div className="border border-solid border-gray-200 mx-auto w-11/12"> </div>
					<NewsType4></NewsType4>
					<div className="border border-solid border-gray-200 mx-auto w-11/12"> </div>
					<NewsType4></NewsType4>
					<div className="border border-solid border-gray-200 mx-auto w-11/12"> </div>
					<NewsType4></NewsType4>
				</div>
			</div>
		</div>
	);
};

export default BottomSection;
