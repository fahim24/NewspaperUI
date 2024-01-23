import NewsBody from "../NewsBody";
import NewsHeadline from "../NewsHeadline";
import NewsTags from "../NewsTags";
import NewsTime from "../NewsTime";

import Ellipse from "../../../assets/images/icons/ellipse2.svg";

const NewsType2 = () => {
	return (
		<section>
			<div className="flex flex-col items-start gap-[10px] ">
				<div className=" text-CBlue text-lg font-bold w-[296px] line-clamp-1">
					<NewsHeadline></NewsHeadline>
				</div>
				<div className="w-[296px] text-CGray line-clamp-3">
					<NewsBody></NewsBody>
				</div>
				<div className="flex items-center gap-[8px] ">
					<div className="text-sm text-CGray">
						<NewsTime></NewsTime>
					</div>
					<img src={Ellipse} alt="" />
					<div className="text-sm text-COrange font-bold">
						<NewsTags></NewsTags>
					</div>
				</div>
			</div>
		</section>
	);
};
export default NewsType2;
