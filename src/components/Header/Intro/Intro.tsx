import Menu from "../../../assets/images/icons/menu.svg";
import Search from "../../../assets/images/icons/search.svg";
import Date from "../../../assets/images/icons/date.svg";
import Logo from "../../../assets/images/Logo/logo.png";
import Dark from "../../../assets/images/icons/dark.svg";
import Light from "../../../assets/images/icons/Light.svg";
import LanIcon from "../../../assets/images/icons/language.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Intro = () => {
	const [isDarkOn, setIsDarkOn] = useState(false);
	const [isLang, setIsLang] = useState(false);

	const changeImage = () => {
		setIsDarkOn((prevIsDarkOn) => !prevIsDarkOn);
	};

	const changeLang = () => {
		setIsLang((prevIsLang) => !prevIsLang);
	};
	return (
		<section>
			<div className="container mx-auto my-3 px-2.5">
				<div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center justify-center gap-y-8">
					{/* Daily Info */}

					<div className="inline-flex flex-col flex-start gap-2">
						<div className="flex items-center gap-4 relative">
							<a href="#">
								<img src={Menu} alt="Menu" title="Toggle Navbar" />
							</a>

							<div className="flex items-center justify-center absolute left-10">
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
							<p className="text-sm text-CBlack leading-7 ">মঙ্গলবার, ১৬ই জানুয়ারি, ২০২৪</p>
						</div>
					</div>
					{/* Logo */}

					<div className="flex justify-center">
						<Link to="/">
							<img src={Logo} className="object-cover " alt="Logo" title="Go to Home" />
						</Link>
					</div>
					{/* Logs */}

					<div className="flex flex-row items-center justify-center gap-4  ">
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
						>
							<Link to="/login">লগ ইন</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
