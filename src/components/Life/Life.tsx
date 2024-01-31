import NC1 from "../../assets/images/News/newsCover5.jpg";
import NC2 from "../../assets/images/News/newsCover6.jpg";
import NC3 from "../../assets/images/News/newsCover12.jpg";
import NC4 from "../../assets/images/News/newsCover22.jpg";

const Life = () => {
	return (
		<section>
			{/* Section Body */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-6">
				{/* News 1 */}
				<article className="flex flex-col items-start gap-4">
					{/* News Cover */}
					<img src={NC1} alt="" className="h-44 w-full object-cover" />
					{/* News Body */}
					<div className="flex flex-col items-start gap-2">
						{/* News Headline */}
						<h5 className="text-CBlue hover:text-COrange text-lg font-bold">
							<a href="#">ঢাকায় বাসাবাড়িতে লাকড়ির চুলায় রান্না কেন</a>
						</h5>
						{/* News Detail */}
						<p className="line-clamp-3 text-CGray text-sm">
							সিলেট ওসমানী আন্তর্জাতিক বিমানবন্দরে বাংলাদেশ বিমানের এক‌টি ফ্লাইট উড্ডয়নের আগে চাকা
							ফেটে রানওয়ে বন্ধ হয়ে গেছে। শুক্রবার বেলা সোয়া ১টার দিকে বাংলাদেশ বিমানের সিলেট থেকে
							ঢাকাগামী ৬০২ ফ্লাইটে এ ঘটনা ঘটে। ওই ফ্লাইটে ১৪৮ জন যাত্রী ছিলেন। বিষয়‌টি গণমাধ্যমকে
							নি‌শ্চিত করেছেন সিলেট ওসমানী আন্তর্জাতিক বিমানবন্দরের প‌রিচা‌লক হা‌ফিজ আহমদ।
						</p>
					</div>
					{/* News Footer */}
					<p className="text-CGray text-sm">২ ঘণ্টা আগে</p>
				</article>
				{/* Divider */}
				{/* News 2 */}
				<article className="flex flex-col items-start gap-4">
					{/* News Cover */}
					<img src={NC2} alt="" className="w-full h-44 object-cover" />
					{/* News Body */}
					<div className="flex flex-col items-start gap-2">
						{/* News Headline */}
						<h5 className="text-CBlue hover:text-COrange text-lg font-bold">
							<a href="#">
								চুয়াডাঙ্গার গ্রামটিকে বলা হচ্ছে ‘বন্য প্রাণী ও পাখির গ্রাম’, ১৫ ছবিতে তারই প্রমাণ
							</a>
						</h5>
						{/* News Deatail */}
						<p className="line-clamp-3 text-CGray text-sm">
							সিলেট ওসমানী আন্তর্জাতিক বিমানবন্দরে বাংলাদেশ বিমানের এক‌টি ফ্লাইট উড্ডয়নের আগে চাকা
							ফেটে রানওয়ে বন্ধ হয়ে গেছে। শুক্রবার বেলা সোয়া ১টার দিকে বাংলাদেশ বিমানের সিলেট থেকে
							ঢাকাগামী ৬০২ ফ্লাইটে এ ঘটনা ঘটে। ওই ফ্লাইটে ১৪৮ জন যাত্রী ছিলেন। বিষয়‌টি গণমাধ্যমকে
							নি‌শ্চিত করেছেন সিলেট ওসমানী আন্তর্জাতিক বিমানবন্দরের প‌রিচা‌লক হা‌ফিজ আহমদ।
						</p>
					</div>
					{/* News Footer */}
					<p className="text-CGray text-sm">২ ঘণ্টা আগে</p>
				</article>
				{/* Divider */}
				{/* News 3 */}
				<article className="flex flex-col items-start gap-4">
					{/* News Cover */}
					<img src={NC3} alt="" className="w-full h-44 object-cover" />
					{/* News Body */}
					<div className="flex flex-col items-start gap-2">
						{/* News Headline */}
						<h5 className="text-CBlue hover:text-COrange text-lg font-bold">
							<a href="#">ঢাকায় বাসাবাড়িতে লাকড়ির চুলায় রান্না কেন</a>
						</h5>
						{/* News Detail */}
						<p className="line-clamp-3 text-CGray text-sm">
							সিলেট ওসমানী আন্তর্জাতিক বিমানবন্দরে বাংলাদেশ বিমানের এক‌টি ফ্লাইট উড্ডয়নের আগে চাকা
							ফেটে রানওয়ে বন্ধ হয়ে গেছে। শুক্রবার বেলা সোয়া ১টার দিকে বাংলাদেশ বিমানের সিলেট থেকে
							ঢাকাগামী ৬০২ ফ্লাইটে এ ঘটনা ঘটে। ওই ফ্লাইটে ১৪৮ জন যাত্রী ছিলেন। বিষয়‌টি গণমাধ্যমকে
							নি‌শ্চিত করেছেন সিলেট ওসমানী আন্তর্জাতিক বিমানবন্দরের প‌রিচা‌লক হা‌ফিজ আহমদ।
						</p>
					</div>
					{/* News Footer */}
					<p className="text-CGray text-sm">২ ঘণ্টা আগে</p>
				</article>
				{/* Divider */}
				{/* News 4 */}
				<article className="flex flex-col items-start gap-4">
					{/* News Cover */}
					<img src={NC4} alt="" className="w-full h-44 object-cover" />
					{/* News Body */}
					<div className="flex flex-col items-start gap-2">
						{/* News Headline */}
						<h5 className="text-CBlue hover:text-COrange text-lg font-bold">
							<a href="#">
								চুয়াডাঙ্গার গ্রামটিকে বলা হচ্ছে ‘বন্য প্রাণী ও পাখির গ্রাম’, ১৫ ছবিতে তারই প্রমাণ
							</a>
						</h5>
						{/* News Detail */}
						<p className="line-clamp-3 text-CGray text-sm">
							সিলেট ওসমানী আন্তর্জাতিক বিমানবন্দরে বাংলাদেশ বিমানের এক‌টি ফ্লাইট উড্ডয়নের আগে চাকা
							ফেটে রানওয়ে বন্ধ হয়ে গেছে। শুক্রবার বেলা সোয়া ১টার দিকে বাংলাদেশ বিমানের সিলেট থেকে
							ঢাকাগামী ৬০২ ফ্লাইটে এ ঘটনা ঘটে। ওই ফ্লাইটে ১৪৮ জন যাত্রী ছিলেন। বিষয়‌টি গণমাধ্যমকে
							নি‌শ্চিত করেছেন সিলেট ওসমানী আন্তর্জাতিক বিমানবন্দরের প‌রিচা‌লক হা‌ফিজ আহমদ।
						</p>
					</div>
					{/* news footer */}
					<p className="text-CGray text-sm">২ ঘণ্টা আগে</p>
				</article>
			</div>
		</section>
	);
};

export default Life;
