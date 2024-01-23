import NewsCover from "../News/NewsCover";
import NewsType1 from "../News/NewsType/NewsType1";
import NewsType4 from "../News/NewsType/NewsType4";

const EnterTainment = () => {
	return (
		<div className="w-11/12 md:w-11/12 mx-auto">
			<div className="flex items-center justify-around my-5 ">
				<div className="border border-solid border-gray-200 m-2 w-full"> </div>
				<h1 className="text-xl font-bold hover:text-orange-400">বিনোদন</h1>
				<div className="border border-solid border-gray-200 m-2 w-full"> </div>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid:cols-4 gap-3 ">
				<div className="col-span-2 md:col-span-3">
					<div className="grid grid-cols-2 md:grid-cols-3 gap-3  border-b-2 border-solid border-gray-200 pb-2 mb-2">
						<div className="col-span-2">
							<NewsType1></NewsType1>
						</div>
						<div>
							<div className="border-b-2 border-solid border-gray-200 mb-2">
								<NewsCover></NewsCover>
								<NewsType4></NewsType4>
							</div>
							<div>
								<NewsCover></NewsCover>
								<NewsType4></NewsType4>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 gap-2">
						<div className="border-r-2 border-solid border-gray-200 pr-2">
							<NewsType1></NewsType1>
						</div>
						<div className="hidden md:block px-2">
							<NewsType1></NewsType1>
						</div>
						<div className="border-l-2 border-solid border-gray-200 pl-2">
							<NewsType1></NewsType1>
						</div>
					</div>
				</div>

				<div className="border-l-2 border-solid border-gray-200 pl-2">
					<div className="border-b-2 border-solid border-gray-200 mb-2">
						<div className="my-2 border-b-2 border-solid border-gray-200 p-2">
							<h1 className="text-md font-semibold">অনলাইন ভোট</h1>
						</div>
						<img src="" alt="" className="py-2" />
						<p className="text-xs text-gray-500">
							ইউক্রেনের শস্য রপ্তানির জন্য কৃষ্ণসাগরের বন্দরগুলো খুলে দিতে জাতিসংঘ-সমর্থিত একটি
							চুক্তি করেছে রাশিয়া ও ইউক্রেন। ইউক্রেনে রুশ হামলা শুরুর পর বিশ্বজুড়ে যে খাদ্যসংকট দেখা
							দিয়েছে, এ চুক্তির ফলে তা কেটে যাবে বলে আপনি মনে করেন কি?
						</p>
						<div className="my-5">
							<div className="flex items-center mb-2 bg-gray-100 rounded-md px-3 py-1">
								<input
									type="radio"
									value="হ্যাঁ"
									className="h-3 w-3 border-orange-300 accent-orange-400"
									checked={true}
								/>
								<label className="text-sm font-medium text-gray-900 ml-2 block">হ্যাঁ</label>
							</div>

							<div className="flex items-center mb-2 bg-gray-100 rounded-md px-3 py-1">
								<input
									type="radio"
									value="না"
									className="h-3 w-3 border-orange-300  accent-orange-400"
									checked={false}
								/>
								<label className="text-sm font-medium text-gray-900 ml-2 block">না</label>
							</div>
							<div className="flex items-center mb-2 bg-gray-100 rounded-md px-3 py-1">
								<input
									type="radio"
									value="মন্তব্য নেই"
									className="h-3 w-3 border-orange-300  accent-orange-400"
									checked={false}
								/>
								<label className="text-sm font-medium text-gray-900 ml-2 block">মন্তব্য নেই</label>
							</div>
							<button className="text-white text-sm whitespace-nowrap w-full py-2 bg-slate-900 rounded-md my-2">
								ভোট
							</button>
						</div>
					</div>
					ad2
				</div>
			</div>
		</div>
	);
};

export default EnterTainment;
