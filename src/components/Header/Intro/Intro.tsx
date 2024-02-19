import Menu from "../../../assets/images/icons/menu.svg";
import Search from "../../../assets/images/icons/search.svg";
import Date from "../../../assets/images/icons/date.svg";
import Logo from "../../../assets/images/Logo/logo.png";
import Dark from "../../../assets/images/icons/dark.svg";
import Light from "../../../assets/images/icons/light.svg";
import LanIcon from "../../../assets/images/icons/language.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Intro = () => {
	const [isDarkOn, setIsDarkOn] = useState(false);
	const [isLang, setIsLang] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const changeImage = () => {
		setIsDarkOn((prevIsDarkOn) => !prevIsDarkOn);
	};

	const changeLang = () => {
		setIsLang((prevIsLang) => !prevIsLang);
	};

	const toggleMenu = () => {
		const nav = document.getElementById("navBar");
		const menuToggle = document.getElementById("menuToggle");

		if (!isOpen) {
			nav?.classList.remove("hidden");
			nav?.classList.add("block");
			menuToggle?.classList.remove("hidden");
			menuToggle?.classList.add("flex");

			setIsOpen((prevIsLang) => !prevIsLang);
		} else {
			nav?.classList.remove("block");
			nav?.classList.add("hidden");
			menuToggle?.classList.remove("flex");
			menuToggle?.classList.add("hidden");

			setIsOpen((prevIsLang) => !prevIsLang);
		}
	};

	return (
		<section>
			<div className="container mx-auto my-3 px-2.5">
				<div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center justify-center gap-y-4">
					{/* Daily Info */}

					<div className="flex flex-row md:flex-col flex-start justify-between gap-4">
						<div className="flex items-center gap-4 relative">
							<button className="block lg:hidden" onClick={toggleMenu}>
								<img src={Menu} alt="Menu" title="Toggle Navbar" />
							</button>

							<div className="flex items-center justify-center absolute left-10 lg:left-0">
								<form action="" className="relative mx-auto flex">
									<input
										type="search"
										className="text-xs bg-ClGray peer cursor-pointer relative z-10  w-10   bg-transparent pr-7 outline-none  focus:w-full focus:cursor-text focus:border-ClGray "
										placeholder="অনুসন্ধান ..."
									/>
									<img
										src={Search}
										alt="Search"
										title="Search"
										className="absolute top-0 left-0 bottom-0 my-auto h-[32px] peer-focus:relative "
									/>
								</form>
							</div>
						</div>
						<div className="flex items-center gap-2   " title="Today's Date">
							<img src={Date} alt="Calender" />
							<p className="text-xs md:text-sm text-CBlack">মঙ্গলবার, ১৬ই জানুয়ারি, ২০২৪</p>
						</div>
					</div>
					{/* Logo */}

					<div className="flex justify-center mb-4 md:mb-0" onClick={toggleMenu}>
						<Link to="/">
							<img src={Logo} className="object-cover " alt="Logo" title="Go to Home" />
						</Link>
					</div>
					{/* Logs */}

					<div
						id="menuToggle"
						className="hidden md:flex flex-row items-center justify-center gap-4  "
					>
						<div className="flex items-center gap-4  ">
							<img
								id="themeChange"
								src={isDarkOn ? Light : Dark}
								alt="Theme Change"
								title="Toggle Dark/Light Mode"
								onClick={changeImage}
								className={` cursor-pointer ${isDarkOn ? "bg-CBlack rounded-full" : ""}`}
							/>

							<div
								className="flex gap-1 items-center px-4 py-1 border border-solid border-ClGray rounded-md cursor-pointer "
								title="Toggle Language"
								onClick={changeLang}
							>
								<img src={LanIcon} alt="Language Icon" />
								<p className="text-CBlack text-sm leading-7">{isLang ? "En" : "বাং"}</p>
							</div>
						</div>
						<div
							className="px-4 py-2 border rounded-md bg-COrange text-white text-center text-xs font-bold"
							title="Go to Login"
							onClick={toggleMenu}
						>
							<Link to="/login">লগ ইন</Link>
						</div>
					</div>
				</div>
			</div>
			<section className="border-t border-solid border-ClGray">
				<nav id="navBar" className="container mx-auto px-2.5 hidden lg:block">
					<div className="flex flex-col lg:flex-row  gap-x-12 items-center justify-center ">
						{/* Nav Link 1 */}
						<div
							className="py-2 text-COrange border-b-2 border-COrange"
							title="Go to Bangladesh News"
							onClick={toggleMenu}
						>
							<Link to="/bangladesh">বাংলাদেশ</Link>
						</div>
						{/* Nav Link 2 */}
						<div
							className="text-CBlack py-2 hover:text-COrange hover:border-b-2 border-COrange"
							title="Go to International News"
							onClick={toggleMenu}
						>
							<Link to="/international">আন্তর্জাতিক</Link>
						</div>
						{/* Nav Link 3 */}
						<div
							className="text-CBlack py-2 hover:text-COrange hover:border-b-2 border-COrange"
							title="Go to Sports News"
							onClick={toggleMenu}
						>
							<Link to="/sports">খেলাধুলা</Link>
						</div>
						{/* Nav Link 4 */}
						<div
							className="text-CBlack py-2 hover:text-COrange hover:border-b-2 border-COrange"
							title="Go to Entertainment News"
							onClick={toggleMenu}
						>
							<Link to="/entertainment">বিনোদন</Link>
						</div>
						{/* Nav Link 5 */}
						<div
							className="text-CBlack py-2 hover:text-COrange hover:border-b-2 border-COrange"
							title="Go to Blogs"
							onClick={toggleMenu}
						>
							<Link to="/comments">মতামত</Link>
						</div>
						{/* Nav Link 6 */}
						<div
							className="text-CBlack py-2 hover:text-COrange hover:border-b-2 border-COrange"
							title="Go to Religion News"
							onClick={toggleMenu}
						>
							<Link to="/religion">ধর্ম</Link>
						</div>
						{/* Nav Link 7 */}
						<div
							className="text-CBlack py-2 hover:text-COrange hover:border-b-2 border-COrange"
							title="Go to Literature News"
							onClick={toggleMenu}
						>
							<a></a>
							<Link to="/literature">সাহিত্য</Link>
						</div>
						{/* Nav Link 8 */}
						<div
							className="text-CBlack py-2 hover:text-COrange hover:border-b-2 border-COrange"
							title="Go to Jobs News"
							onClick={toggleMenu}
						>
							<Link to="/jobs">চাকরি</Link>
						</div>
						{/* Nav Link 9 */}
						<div
							className="text-CBlack py-2 hover:text-COrange hover:border-b-2 border-COrange"
							title="Go to Others News"
							onClick={toggleMenu}
						>
							<Link to="/others">বিবিধ</Link>
						</div>
						{/* Nav Link 10 */}
						<div
							className="text-CBlack py-2 hover:text-COrange hover:border-b-2 border-COrange"
							title="Go to Travel News"
							onClick={toggleMenu}
						>
							<Link to="/travel">ভ্রমণ</Link>
						</div>
					</div>
				</nav>
			</section>
		</section>
	);
};

export default Intro;
