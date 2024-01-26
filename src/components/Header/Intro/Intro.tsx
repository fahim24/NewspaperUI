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
			<div className="w-[1280px] mx-auto mt-[10px] h-[82px]">
				<div className="grid grid-cols-[auto_1fr_auto] items-center justify-center">
					{/* Daily Info */}

					<div className="inline-flex flex-col flex-start gap-[10px]">
						<div className="flex items-center gap-[15px]">
							<img src={Menu} alt="Menu" title="Toggle Navbar" />
							<div className="flex items-center justify-center h-[32px] ">
								<form action="" className="relative mx-auto flex">
									<input
										type="search"
										className="text-xs bg-ClGray peer cursor-pointer relative z-10 h-[32px] w-10   bg-transparent pr-7 outline-none  focus:w-full focus:cursor-text focus:border-ClGray "
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
						<div className="flex items-center gap-[10px] h-[20px]  " title="Today's Date">
							<img src={Date} alt="Calender" />
							<p className="text-sm text-CBlack leading-7">মঙ্গলবার, ১৬ই জানুয়ারি, ২০২৪</p>
						</div>
					</div>
					{/* Logo */}

					<div className="flex justify-center">
						<Link to="/">
							<img src={Logo} className="h-[50px]" alt="Logo" title="Go to Home" />
						</Link>
					</div>
					{/* Logs */}

					<div className="inline-flex items-center gap-[15px]  ">
						<img
							id="themeChange"
							src={isDarkOn ? Light : Dark}
							alt="Theme Change"
							title="Toggle Dark Mode"
							onClick={changeImage}
							className={isDarkOn ? "bg-CBlack" : ""}
						/>

						<div
							className="flex gap-[4px] h-[30px] items-center px-[15px] py-[5px] border border-solid border-Secondary rounded-[6px] "
							title="Toggle Language"
							onClick={changeLang}
						>
							<img src={LanIcon} alt="Language Icon" />
							<p className="text-CBlack text-sm leading-7">{isLang ? "En" : "বাং"}</p>
						</div>
						<button
							className="px-[15px] py-[5px] border h-[30px] rounded-[5px] bg-COrange text-white text-center text-xs font-bold"
							title="Login"
						>
							<Link to="/login">লগ ইন</Link>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
