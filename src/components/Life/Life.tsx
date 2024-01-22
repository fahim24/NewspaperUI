import NewsType1 from "../News/NewsType/NewsType1";

const Life = () => {
	return (
		<div className="w-11/12 md:w-10/12 mx-auto">
			<div className="flex items-center justify-around my-5 ">
				<div className="border border-solid border-gray-200 m-2 w-full"> </div>
				<h1 className="text-xl font-bold hover:text-orange-400">জীবনযাপন</h1>
				<div className="border border-solid border-gray-200 m-2 w-full"> </div>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-3 ">
				<div className="border-r-2 border-solid border-gray-200 pr-2">
					<NewsType1></NewsType1>
				</div>
				<div className="md:border-r-2 border-solid border-gray-200 md:pr-2">
					<NewsType1></NewsType1>
				</div>
				<div className="border-r-2 border-solid border-gray-200 pr-2">
					<NewsType1></NewsType1>
				</div>
				<div>
					<NewsType1></NewsType1>
				</div>
			</div>
		</div>
	);
};

export default Life;
