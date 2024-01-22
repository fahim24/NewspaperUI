import NewsHeadline from "../NewsHeadline";
import NewsTags from "../NewsTags";

const NewsType4 = () => {
	return (
		<div className="overflow-hidden">
			<div className="bg-white py-4 ">
				<h2 className=" font-bold mb-2 hover:text-orange-400 line-clamp-2">
					<NewsHeadline></NewsHeadline>
				</h2>
				<NewsTags></NewsTags>
			</div>
		</div>
	);
};

export default NewsType4;
