import NewsType3 from "../News/NewsType/NewsType3";

const PhotoGalary = () => {
	return (
		<div className="w-11/12 md:w-11/12 mx-auto">
			<div className="flex items-center justify-around my-5 ">
				<div className="border border-solid border-gray-200 m-2 w-full"> </div>
				<h1 className="text-xl font-bold hover:text-orange-400">ছবি</h1>
				<div className="border border-solid border-gray-200 m-2 w-full"> </div>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-80">
				<div className="border-r-2 border-solid border-gray-200 pr-2 md:order-first">
					<div className="h-1/2 pb-2 border-b-2 border-solid border-gray-200">
						<NewsType3></NewsType3>
					</div>
					<div className="h-1/2 pt-2 order-first">
						<NewsType3></NewsType3>
					</div>
				</div>
				<div className="col-span-2 order-first">
					<NewsType3></NewsType3>
				</div>
				<div className="border-l-2 border-solid border-gray-200 pl-2">
					<div className="h-1/2 pb-2 border-b-2 border-solid border-gray-200">
						<NewsType3></NewsType3>
					</div>
					<div className="h-1/2 pt-2">
						<NewsType3></NewsType3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PhotoGalary;
