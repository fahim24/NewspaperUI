import NewsHeadline from "../NewsHeadline";

const NewsType3 = () => {
	return (
		<div className="bg-[url(https://picsum.photos/800/400)] h-full w-full relative bg-cover">
			<div className="absolute bottom-0 px-4 py-3  w-full">
				<h1 className="text-white font-bold text-sm md:text-md hover:text-orange-400 truncate">
					<NewsHeadline></NewsHeadline>
				</h1>
			</div>
		</div>
	);
};

export default NewsType3;
