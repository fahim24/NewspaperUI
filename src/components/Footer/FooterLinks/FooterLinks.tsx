import Copyright from "../Copyright/Copyright";

const FooterLinks = () => {
	return (
		<section>
			<div className=" py-[32px] bg-slate-800">
				<div className="w-[1280px] mx-auto flex flex-col items-start gap-[24px] text-sm text-white">
					<div className="flex items-start gap-[32px] ">
						<div className="flex flex-col items-start gap-[10px] w-[187px]">
							<div className="hover:text-orange-400">
								<a>আমাদের সম্পর্কে</a>
							</div>
							<div className="hover:text-orange-400">
								<a>যোগাযোগ</a>
							</div>
						</div>
						<div className="flex flex-col items-start gap-[10px] w-[187px]">
							<div className="hover:text-orange-400 ">
								<a>বিজ্ঞাপন</a>
							</div>
							<div className="hover:text-orange-400 ">
								<a>নীতিমালা</a>
							</div>
						</div>
						<div className="flex flex-col items-start gap-[10px] w-[187px]">
							<div className="hover:text-orange-400 ">
								<a>গোপনীয়তা নীতি</a>
							</div>
						</div>
					</div>
					<div className="border border-solid border-white w-full"></div>
					<Copyright></Copyright>
				</div>
			</div>
		</section>
	);
};

export default FooterLinks;
