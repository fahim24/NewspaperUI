import NewsHeadline from "../NewsHeadline";
//import NC1 from "../../../assets/images/News/newsCover1.png";

const NewsType4 = () => {
	return (
		<div className="bg-[url(https://picsum.photos/800/400)] h-[350px] w-[624px] relative bg-cover">
			<div className="absolute bottom-0">
				<div className="text-white text-2xl font-bold p-[20px]">
					<NewsHeadline></NewsHeadline>
				</div>
			</div>
		</div>
	);
};

export default NewsType4;
