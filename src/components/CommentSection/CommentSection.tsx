import P1 from "../../assets/images/Logo/person1.jpg";
import P2 from "../../assets/images/Logo/person2.jpg";
import P3 from "../../assets/images/Logo/person3.jpg";
import P4 from "../../assets/images/Logo/person4.jpg";

const CommentSection = () => {
	return (
		<section>
			<div className="container mx-auto ">
				{/* Section Body */}

				<div className="flex flex-col lg:flex-row gap-8 my-6">
					<div className="flex flex-col w-full lg:w-[624px] p-6 items-start gap-4 border border-solid border-ClGray">
						<div className="flex items-center gap-5 self-stretch">
							<img src={P1} alt="" className="w-24 h-24 rounded-[6rem] shrink-0 object-cover" />
							<div className="flex flex-col items-start gap-1">
								<h4 className="text-COrange font-bold text-xl">
									<a href="#">ড. মঞ্জুরে খোদা</a>
								</h4>
								<p className="text-CBlue">জয়পুরহাট</p>
							</div>
						</div>
						<p className="text-CGray self-stretch">
							বিদেশে রপ্তানির পোশাক বন্দরে নেওয়ার পথে ট্রাক ও কাভার্ডভ্যান থেকে চুরি চক্রের নেতৃত্ব
							দিয়ে আসছিলেন মো. সাহেদ ওরফে সিলেটি সাঈদ। তাঁর গ্রামের বাড়ি মৌলভীবাজার হলেও
							ঢাকা–চট্টগ্রাম মহাসড়ক থেকে পণ্য চুরিতে সুবিধা পাওয়ার জন্য তিনি থাকতেন চট্টগ্রামে। তবে
							তাঁর পরিবারের বসবাস মৌলভীবাজারেই। র‌্যাব বলছে, দুই দশকে রপ্তানির পণ্য চুরি করে সাহেদ
							শত কোটি টাকারও বেশি সম্পদের মালিক হয়েছেন। এই টাকা দিয়েই তিনি নিজের জেলা মৌলভীবাজার
							সদরের দুর্লভপুরে দুটি বিলাসবহুল বাড়ি তৈরি করেছেন। তার একটি ২০ একর জমি নিয়ে। তাঁর এই
							বাগান বাড়ি ট্রিপ্লেক্স ঘর, একটি মাছের খামার ও দুটি হাঁস–মুরগির খামার রয়েছে। এই বাড়িতে
							সাহেদের ছোট স্ত্রী থাকেন। বাড়িটি তৈরিতে সাহেদ ১৫ কোটির বেশি টাকা ব্যয় করেছেন বলে
							র‌্যাব কর্মকর্তারা জানিয়েছেন। তাদের দেওয়া তথ্য মতে, দুর্লভপুর গ্রামেই আরেকটি ডুপ্লেক্স
							বাড়ি করেছেন সাহেদ। ওই বাড়িতে তাঁর বড় স্ত্রী থাকেন। এ ছাড়া নামে-বেনামে সাহেদের অন্তত
							২০টি কাভার্ডভ্যান রয়েছে।
						</p>
					</div>
					<div className="inline-flex flex-col items-start gap-4 w-full  lg:w-[624px]">
						<div className="flex w-full items-center gap-4">
							<img src={P2} alt="" className="w-24 h-24 rounded-[6rem] shrink-0 object-cover" />
							<div className="flex flex-col items-start gap-4">
								<p className="text-CGray text-lg">
									সিলেট ওসমানী আন্তর্জাতিক বিমানবন্দরে বাংলাদেশ বিমানের এক‌টি ফ্লাইট উড্ডয়নের আগে...
								</p>
								<p className="text-COrange">
									<a href="#">ড. মঞ্জুরে খোদা</a>
								</p>
							</div>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="flex w-full items-center gap-4">
							<img src={P3} alt="" className="w-24 h-24 rounded-[6rem] shrink-0 object-cover" />
							<div className="flex flex-col items-start gap-4">
								<p className="text-CGray text-lg">
									সিলেট ওসমানী আন্তর্জাতিক বিমানবন্দরে বাংলাদেশ বিমানের এক‌টি ফ্লাইট উড্ডয়নের আগে...
								</p>
								<p className="text-COrange">
									<a href="#">ড. মঞ্জুরে খোদা</a>
								</p>
							</div>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="flex w-full items-center gap-4">
							<img src={P4} alt="" className="w-24 h-24 rounded-[6rem] shrink-0 object-cover" />
							<div className="flex flex-col items-start gap-4">
								<p className="text-CGray text-lg">
									সিলেট ওসমানী আন্তর্জাতিক বিমানবন্দরে বাংলাদেশ বিমানের এক‌টি ফ্লাইট উড্ডয়নের আগে...
								</p>
								<p className="text-COrange">
									<a href="#">ড. মঞ্জুরে খোদা</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CommentSection;
