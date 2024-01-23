import NewsBody from "../NewsBody";
import NewsHeadline from "../NewsHeadline";
import NewsTags from "../NewsTags";
import NewsTime from "../NewsTime";

import Ellipse from "../../../assets/images/icons/ellipse2.svg";

const NewsType1 = () => {
	return (
		<section>
			<div className="flex flex-col items-start gap-[20px]">
				<div className="flex flex-col items-start gap-[15px] ">
					<h1 className=" text-CBlue text-2xl font-bold w-[308px] line-clamp-3">
						<NewsHeadline></NewsHeadline>
					</h1>
					<p className="w-[308px] text-CGray line-clamp-8">
						<NewsBody></NewsBody>
					</p>
				</div>
				<div className="flex items-center gap-[8px] ">
					<p className="text-sm text-CGray">
						<NewsTime></NewsTime>
					</p>
					<img src={Ellipse} alt="" />
					<p className="text-sm text-COrange font-bold">
						<NewsTags></NewsTags>
					</p>
				</div>
			</div>
		</section>
	);
};
export default NewsType1;
