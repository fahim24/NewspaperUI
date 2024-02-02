import Copyright from "../Copyright/Copyright";

const FooterLinks = () => {
	return (
		<section>
			<div className=" py-8 bg-CBlue">
				<div className="container mx-auto flex flex-col items-start gap-6 text-sm text-white px-2.5">
					{/* Site Links */}

					<div className="flex flex-col sm:flex-row items-center sm:items-start mx-auto sm:ms-0  gap-x-8 gap-y-2">
						<div className="flex flex-col items-center sm:items-start gap-2 ">
							<div className="hover:text-orange-400">
								<a href="#">আমাদের সম্পর্কে</a>
							</div>
							<div className="hover:text-orange-400">
								<a href="#">যোগাযোগ</a>
							</div>
						</div>
						<div className="flex flex-col items-center sm:items-start gap-2 ">
							<div className="hover:text-orange-400 ">
								<a href="#">বিজ্ঞাপন</a>
							</div>
							<div className="hover:text-orange-400 ">
								<a href="#">নীতিমালা</a>
							</div>
						</div>
						<div className="flex flex-col items-center sm:items-start gap-2 ">
							<div className="hover:text-orange-400 ">
								<a href="#">গোপনীয়তা নীতি</a>
							</div>
						</div>
					</div>
					{/* Line */}

					<div className="border border-solid border-white w-full"></div>
					{/* Copyright Info */}

					<Copyright></Copyright>
				</div>
			</div>
		</section>
	);
};

export default FooterLinks;
