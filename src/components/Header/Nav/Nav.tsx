import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<section className="border-t border-solid border-ClGray">
			<nav id="navBar" className="container mx-auto px-2.5 hidden lg:block">
				<div className="flex flex-col lg:flex-row  gap-x-12 items-center justify-center ">
					{/* Nav Link 1 */}
					<div
						className="py-2 text-COrange border-b-2 border-COrange"
						title="Go to Bangladesh News"
					>
						<Link to="/bangladesh">বাংলাদেশ</Link>
					</div>
					{/* Nav Link 2 */}
					<div
						className="text-CBlack py-2 hover:text-COrange hover:border-b-2 border-COrange"
						title="Go to International News"
					>
						<Link to="/international">আন্তর্জাতিক</Link>
					</div>
					{/* Nav Link 3 */}
					<div
						className="text-CBlack py-2 hover:text-COrange hover:border-b-2 border-COrange"
						title="Go to Sports News"
					>
						<Link to="/sports">খেলাধুলা</Link>
					</div>
					{/* Nav Link 4 */}
					<div
						className="text-CBlack py-2 hover:text-COrange hover:border-b-2 border-COrange"
						title="Go to Entertainment News"
					>
						<Link to="/entertainment">বিনোদন</Link>
					</div>
					{/* Nav Link 5 */}
					<div
						className="text-CBlack py-2 hover:text-COrange hover:border-b-2 border-COrange"
						title="Go to Blogs"
					>
						<Link to="/comments">মতামত</Link>
					</div>
					{/* Nav Link 6 */}
					<div
						className="text-CBlack py-2 hover:text-COrange hover:border-b-2 border-COrange"
						title="Go to Religion News"
					>
						<Link to="/religion">ধর্ম</Link>
					</div>
					{/* Nav Link 7 */}
					<div
						className="text-CBlack py-2 hover:text-COrange hover:border-b-2 border-COrange"
						title="Go to Literature News"
					>
						<a></a>
						<Link to="/literature">সাহিত্য</Link>
					</div>
					{/* Nav Link 8 */}
					<div
						className="text-CBlack py-2 hover:text-COrange hover:border-b-2 border-COrange"
						title="Go to Jobs News"
					>
						<Link to="/jobs">চাকরি</Link>
					</div>
					{/* Nav Link 9 */}
					<div
						className="text-CBlack py-2 hover:text-COrange hover:border-b-2 border-COrange"
						title="Go to Others News"
					>
						<Link to="/others">বিবিধ</Link>
					</div>
					{/* Nav Link 10 */}
					<div
						className="text-CBlack py-2 hover:text-COrange hover:border-b-2 border-COrange"
						title="Go to Travel News"
					>
						<Link to="/travel">ভ্রমণ</Link>
					</div>
				</div>
			</nav>
		</section>
	);
};

export default Nav;
