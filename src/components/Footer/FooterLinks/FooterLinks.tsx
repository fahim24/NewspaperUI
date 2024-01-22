import Copyright from "../Copyright/Copyright";

const FooterLinks = () => {
	return (
		<section>
			<div className="px-[20rem] bg-slate-800">
				<div className=" text-white p-5 ">
					<div className="w-full md:w-11/12 lg:w-10/12 mx-auto">
						<div className="w-3/4 md:w-1/2 grid grid-cols-3 gap-2 mb-2 text-xs md:text-sm">
							<div className="hover:text-orange-400">
								<a>আমাদের সম্পর্কে</a>
							</div>
							<div className="hover:text-orange-400 ">
								<a>বিজ্ঞাপন</a>
							</div>
							<div className="hover:text-orange-400 ">
								<a>গোপনীয়তা নীতি</a>
							</div>
							<div className="hover:text-orange-400">
								<a>যোগাযোগ</a>
							</div>

							<div className="hover:text-orange-400 ">
								<a>নীতিমালা</a>
							</div>
						</div>

						<Copyright></Copyright>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FooterLinks;
