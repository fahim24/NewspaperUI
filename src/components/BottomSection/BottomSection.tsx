import NC1 from "../../assets/images/News/newsCover23.jpg";
import NC2 from "../../assets/images/News/newsCover24.jpg";
import NC3 from "../../assets/images/News/newsCover25.jpg";
import NC4 from "../../assets/images/News/newsCover26.jpg";
import NewsHeadline from "../News/NewsHeadline";

const BottomSection = () => {
	return (
		<section>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{/* Section 1 */}
				<div className="flex flex-col items-start gap-6 ">
					{/* Section Header */}
					<div className="flex w-full justify-center items-center gap-6">
						<div className="border border-solid border-ClGray w-full"> </div>
						<h4 className="text-CBlue hover:text-COrange items-center text-xl font-bold">
							<a href="#">শিক্ষা</a>
						</h4>
						<div className="border border-solid border-ClGray w-full"> </div>
					</div>
					{/* Section Content */}
					<div className="flex flex-col items-start gap-4 w-full ">
						<div className="flex flex-col items-start gap-4 w-full">
							<img src={NC1} alt="" className="h-40 w-full object-cover" />
							<h5 className="text-CBlue hover:text-COrange text-lg font-bold">
								<NewsHeadline></NewsHeadline>
							</h5>
							<p className="text-CGray text-sm">২৫ মিনিট আগে</p>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="flex flex-col items-start gap-4 w-full">
							<h5 className="text-CBlue hover:text-COrange text-lg ">
								<NewsHeadline></NewsHeadline>
							</h5>
							<p className="text-CGray text-sm">৩১ মিনিট আগে</p>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="flex flex-col items-start gap-4 w-full">
							<h5 className="text-CBlue hover:text-COrange text-lg ">
								<NewsHeadline></NewsHeadline>
							</h5>
							<p className="text-CGray text-sm">৩৪ মিনিট আগে</p>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="flex flex-col items-start gap-4 w-full">
							<h5 className="text-CBlue hover:text-COrange text-lg ">
								<NewsHeadline></NewsHeadline>
							</h5>
							<p className="text-CGray text-sm">৩৭ মিনিট আগে</p>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="flex flex-col items-start gap-4 w-full">
							<h5 className="text-CBlue hover:text-COrange text-lg ">
								<NewsHeadline></NewsHeadline>
							</h5>
							<p className="text-CGray text-sm">৪৪ মিনিট আগে</p>
						</div>
					</div>
				</div>
				{/* Divider */}
				{/* Section 2 */}
				<div className="flex flex-col items-start gap-6">
					{/* Section Header */}
					<div className="flex w-full justify-center items-center gap-6">
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="text-CBlue hover:text-COrange items-center text-xl font-bold">
							<a href="#">চাকরি</a>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
					</div>
					{/* Section Content */}
					<div className="flex flex-col items-start gap-4 w-full ">
						<div className="flex flex-col items-start gap-4 w-full">
							<img src={NC2} alt="" className="h-40 w-full object-cover " />
							<h5 className="text-CBlue hover:text-COrange text-lg font-bold">
								<NewsHeadline></NewsHeadline>
							</h5>
							<p className="text-CGray text-sm">২৫ মিনিট আগে</p>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="flex flex-col items-start gap-4 w-full">
							<h5 className="text-CBlue hover:text-COrange text-lg ">
								<NewsHeadline></NewsHeadline>
							</h5>
							<p className="text-CGray text-sm">৩১ মিনিট আগে</p>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="flex flex-col items-start gap-4 w-full">
							<h5 className="text-COrange text-lg ">
								<NewsHeadline></NewsHeadline>
							</h5>
							<p className="text-CGray text-sm">৩৪ মিনিট আগে</p>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="flex flex-col items-start gap-4 w-full">
							<h5 className="text-CBlue hover:text-COrange text-lg ">
								<NewsHeadline></NewsHeadline>
							</h5>
							<p className="text-CGray text-sm">৩৭ মিনিট আগে</p>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="flex flex-col items-start gap-4 w-full">
							<h5 className="text-CBlue hover:text-COrange text-lg ">
								<NewsHeadline></NewsHeadline>
							</h5>
							<p className="text-CGray text-sm">৪৪ মিনিট আগে</p>
						</div>
					</div>
				</div>
				{/* Divider */}
				{/* Section 3 */}
				<div className="flex flex-col items-start gap-6">
					{/* Section Header */}
					<div className="flex w-full justify-center items-center gap-6">
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="text-CBlue hover:text-COrange items-center text-xl font-bold">
							<a href="#">প্রযুক্তি</a>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
					</div>
					{/* Section Content */}
					<div className="flex flex-col items-start gap-4 w-full ">
						<div className="flex flex-col items-start gap-4 w-full">
							<img src={NC3} alt="" className="w-full h-40 object-cover " />
							<h5 className="text-CBlue hover:text-COrange text-lg font-bold">
								<NewsHeadline></NewsHeadline>
							</h5>
							<p className="text-CGray text-sm">২৫ মিনিট আগে</p>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="flex flex-col items-start gap-4">
							<h5 className="text-CBlue hover:text-COrange text-lg ">
								<NewsHeadline></NewsHeadline>
							</h5>
							<p className="text-CGray text-sm">৩১ মিনিট আগে</p>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="flex flex-col items-start gap-4 ">
							<h5 className="text-CBlue hover:text-COrange text-lg ">
								<NewsHeadline></NewsHeadline>
							</h5>
							<p className="text-CGray text-sm">৩৪ মিনিট আগে</p>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="flex flex-col items-start gap-4 ">
							<h5 className="text-CBlue hover:text-COrange text-lg ">
								<NewsHeadline></NewsHeadline>
							</h5>
							<p className="text-CGray text-sm">৩৭ মিনিট আগে</p>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="flex flex-col items-start gap-4">
							<h5 className="text-CBlue hover:text-COrange text-lg ">
								<NewsHeadline></NewsHeadline>
							</h5>
							<p className="text-CGray text-sm">৪৪ মিনিট আগে</p>
						</div>
					</div>
				</div>
				{/* Divider */}
				{/* Section 4 */}
				<div className="flex flex-col items-start gap-6">
					{/* Section Header */}
					<div className="flex w-full justify-center items-center gap-6">
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="text-CBlue hover:text-COrange items-center text-xl font-bold">
							<a href="#">গ্যাজেটস</a>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
					</div>
					{/* Section Content */}
					<div className="flex flex-col items-start gap-4 w-full">
						<div className="flex flex-col items-start gap-4 w-full">
							<img src={NC4} alt="" className="w-full h-40 object-cover " />
							<h5 className="text-CBlue hover:text-COrange text-lg font-bold">
								<NewsHeadline></NewsHeadline>
							</h5>
							<p className="text-CGray text-sm">২৫ মিনিট আগে</p>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="flex flex-col items-start gap-4 ">
							<h5 className="text-CBlue hover:text-COrange text-lg ">
								<NewsHeadline></NewsHeadline>
							</h5>
							<p className="text-CGray text-sm">৩১ মিনিট আগে</p>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="flex flex-col items-start gap-4">
							<h5 className="text-CBlue hover:text-COrange text-lg ">
								<NewsHeadline></NewsHeadline>
							</h5>
							<p className="text-CGray text-sm">৩৪ মিনিট আগে</p>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="flex flex-col items-start gap-4">
							<h5 className="text-CBlue hover:text-COrange text-lg ">
								<NewsHeadline></NewsHeadline>
							</h5>
							<p className="text-CGray text-sm">৩৭ মিনিট আগে</p>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="flex flex-col items-start gap-4">
							<h5 className="text-CBlue hover:text-COrange text-lg ">
								<NewsHeadline></NewsHeadline>
							</h5>
							<p className="text-CGray text-sm">৪৪ মিনিট আগে</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BottomSection;
