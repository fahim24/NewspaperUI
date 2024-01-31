import NewsBody from "../NewsBody";
import NewsHeadline from "../NewsHeadline";

const NewsType2 = () => {
	return (
		<section>
			<div className="flex flex-col items-start gap-2 ">
				<div className=" text-CBlue hover:text-COrange text-lg font-bold line-clamp-1">
					<NewsHeadline></NewsHeadline>
				</div>
				<div className="text-CGray line-clamp-3">
					<NewsBody></NewsBody>
				</div>
			</div>
		</section>
	);
};
export default NewsType2;
