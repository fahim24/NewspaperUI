import P1 from "../../assets/images/Logo/person1.jpg";
import P2 from "../../assets/images/Logo/person2.jpg";
import P3 from "../../assets/images/Logo/person3.jpg";
import P4 from "../../assets/images/Logo/person4.jpg";

const Reviews = () => {
	return (
		<section>
			<div className="w-[1280px] mx-auto ">
				{/* Section Head */}

				<div className="flex justify-center items-center gap-[24px] my-[24px]">
					<div className="border border-solid border-ClGray w-full"> </div>
					<div className="text-CBlue hover:text-COrange items-center text-2xl font-bold">মতামত</div>
					<div className="border border-solid border-ClGray w-full"> </div>
				</div>
				{/* Section Body */}

				<div className="flex gap-[32px]">
					<div className="flex flex-col w-[624px] p-[24px] items-start gap-[16px] border border-solid border-ClGray">
						<div className="flex items-center gap-[19px] self-stretch">
							<img
								src={P1}
								alt=""
								className="w-[100px] h-[100px] rounded-[100px] shrink-0 object-cover"
							/>
							<div className="flex flex-col items-start gap-[5px]">
								<h4 className="text-COrange font-bold text-xl">ড. মঞ্জুরে খোদা</h4>
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
					<div className="inline-flex flex-col items-start gap-[16px]">
						<div className="flex w-[624px] items-center gap-[16px]">
							<img
								src={P2}
								alt=""
								className="w-[100px] h-[100px] rounded-[100px] shrink-0 object-cover"
							/>
							<div className="flex flex-col items-start gap-[16px]">
								<p className="text-CGray text-lg">
									সিলেট ওসমানী আন্তর্জাতিক বিমানবন্দরে বাংলাদেশ বিমানের এক‌টি ফ্লাইট উড্ডয়নের আগে...
								</p>
								<p className="text-COrange">ড. মঞ্জুরে খোদা</p>
							</div>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="flex w-[624px] items-center gap-[16px]">
							<img
								src={P3}
								alt=""
								className="w-[100px] h-[100px] rounded-[100px] shrink-0 object-cover"
							/>
							<div className="flex flex-col items-start gap-[16px]">
								<p className="text-CGray text-lg">
									সিলেট ওসমানী আন্তর্জাতিক বিমানবন্দরে বাংলাদেশ বিমানের এক‌টি ফ্লাইট উড্ডয়নের আগে...
								</p>
								<p className="text-COrange">ড. মঞ্জুরে খোদা</p>
							</div>
						</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						<div className="flex w-[624px] items-center gap-[16px]">
							<img
								src={P4}
								alt=""
								className="w-[100px] h-[100px] rounded-[100px] shrink-0 object-cover"
							/>
							<div className="flex flex-col items-start gap-[16px]">
								<p className="text-CGray text-lg">
									সিলেট ওসমানী আন্তর্জাতিক বিমানবন্দরে বাংলাদেশ বিমানের এক‌টি ফ্লাইট উড্ডয়নের আগে...
								</p>
								<p className="text-COrange">ড. মঞ্জুরে খোদা</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Reviews;
