import NewsBody from "../NewsBody";
import NewsHeadline from "../NewsHeadline";
import NewsTags from "../NewsTags";
import NewsTime from "../NewsTime";

import Ellipse from "../../../assets/images/icons/ellipse2.svg";

const NewsType3 = () => {
	return (
		<article className="flex flex-col items-start gap-2 text-justify">
			<div className=" text-CBlue hover:text-COrange text-xl font-bold">
				<NewsHeadline></NewsHeadline>
			</div>
			<div className=" text-CGray line-clamp-3">
				<NewsBody></NewsBody>
			</div>
			<div className="flex items-center gap-2 ">
				<div className="text-sm text-CGray">
					<NewsTime></NewsTime>
				</div>
				<img src={Ellipse} alt="" />
				<div className="text-sm text-COrange font-bold">
					<NewsTags></NewsTags>
				</div>
			</div>
		</article>
	);
};
export default NewsType3;
