import NewsHeadline from "../NewsHeadline";
import NC1 from "../../../assets/images/News/newsCover1.png";

const NewsType4 = () => {
	return (
		<div className="relative w-[624px] h-[350px]">
			<img className=" w-full h-full object-cover" src={NC1} alt="News Cover" />
			<div className="absolute w-full h-full top-0 left-0 overlay" />
			<div className="absolute left-[20px] bottom-[20px] text-white text-2xl font-bold leading-9">
				<NewsHeadline />
			</div>
		</div>
	);
};

export default NewsType4;
