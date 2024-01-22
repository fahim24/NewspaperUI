import NewsCover from "../News/NewsCover";
import NewsType4 from "../News/NewsType/NewsType4";

const Videos = () => {
	return (
		<div className="w-11/12 md:w-11/12 mx-auto">
			<div className="flex items-center justify-around my-5 ">
				<div className="border border-solid border-gray-200 m-2 w-full"> </div>
				<h1 className="text-xl font-bold hover:text-orange-400">ভিডিও</h1>
				<div className="border border-solid border-gray-200 m-2 w-full"> </div>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-3 ">
				<div className="border-r-2 border-solid border-gray-200 pr-2">
					<NewsCover></NewsCover>
					<NewsType4></NewsType4>
				</div>
				<div className="md:border-r-2 border-solid border-gray-200 md:pr-2">
					<NewsCover></NewsCover>
					<NewsType4></NewsType4>
				</div>
				<div className="border-r-2 border-solid border-gray-200 pr-2">
					<NewsCover></NewsCover>
					<NewsType4></NewsType4>
				</div>
				<div>
					<NewsCover></NewsCover>
					<NewsType4></NewsType4>
				</div>
			</div>
		</div>
	);
};

export default Videos;
