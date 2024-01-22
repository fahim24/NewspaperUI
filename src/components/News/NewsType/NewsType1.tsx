import NewsBody from "../NewsBody";
import NewsCover from "../NewsCover";
import NewsHeadline from "../NewsHeadline";
import NewsTags from "../NewsTags";

const NewsType1 = () => {
	return (
		<div className="overflow-hidden">
			<NewsCover></NewsCover>
			<div className="bg-white py-4 ">
				<h2 className="font-bold mb-2 hover:text-orange-400 truncate ">
					<NewsHeadline></NewsHeadline>
				</h2>
				<p className="text-xs text-gray-400 line-clamp-3">
					<NewsBody></NewsBody>
				</p>
				<NewsTags></NewsTags>
			</div>
		</div>
	);
};
export default NewsType1;
