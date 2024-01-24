import NewsHeadline from "../NewsHeadline";
import NC1 from "../../../assets/images/News/newsCover1.png";

const NewsType4 = () => {
	return (
		<div className="relative w-[624px] h-[350px]">
			<img className="absolute w-full h-full object-cover" src={NC1} alt="News Cover" />
			<div className="absolute w-full h-full bg-gradient-to-b from-[#e8e9ea] opacity-25 to-CBlue " />
			<div className="absolute left-[20px] bottom-[20px] text-white text-2xl font-bold leading-9">
				<NewsHeadline />
			</div>
		</div>
	);
};

export default NewsType4;
