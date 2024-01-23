import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<section className="border-t-[1px] border-solid border-ClGray">
			<div className="h-auto w-[1280px] mx-auto">
				<div className="flex gap-[50px] items-center justify-center ">
					<div className="py-[6px] text-COrange border-b-2 border-COrange">
						<Link to="/bangladesh">বাংলাদেশ</Link>
					</div>
					<div className="text-CBlack py-[6px] hover:text-COrange hover:border-b-2 hover:border-COrange">
						<Link to="/international">আন্তর্জাতিক</Link>
					</div>
					<div className="text-CBlack py-[6px] hover:text-COrange hover:border-b-2 hover:border-COrange">
						<Link to="/sports">খেলাধুলা</Link>
					</div>
					<div className="text-CBlack py-[6px] hover:text-COrange hover:border-b-2 hover:border-COrange">
						<Link to="/entertainment">বিনোদন</Link>
					</div>
					<div className="text-CBlack py-[6px] hover:text-COrange hover:border-b-2 hover:border-COrange">
						<Link to="/opinions">মতামত</Link>
					</div>
					<div className="text-CBlack py-[6px] hover:text-COrange hover:border-b-2 hover:border-COrange">
						<Link to="/religion">ধর্ম</Link>
					</div>
					<div className="text-CBlack py-[6px] hover:text-COrange hover:border-b-2 hover:border-COrange">
						<a></a>
						<Link to="/literature">সাহিত্য</Link>
					</div>
					<div className="text-CBlack py-[6px] hover:text-COrange hover:border-b-2 hover:border-COrange">
						<Link to="/jobs">চাকরি</Link>
					</div>
					<div className="text-CBlack py-[6px] hover:text-COrange hover:border-b-2 hover:border-COrange">
						<Link to="/others">বিবিধ</Link>
					</div>
					<div className="text-CBlack py-[6px] hover:text-COrange hover:border-b-2 hover:border-COrange">
						<Link to="/travel">ভ্রমণ</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Nav;
