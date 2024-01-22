import Menu from "../../../assets/images/icons/menu.svg";
import Search from "../../../assets/images/icons/search.svg";
import Date from "../../../assets/images/icons/date.svg";
import Logo from "../../../assets/images/Logo/logo.png";
import Dark from "../../../assets/images/icons/dark.svg";
import LanIcon from "../../../assets/images/icons/language.svg";
import { Link } from "react-router-dom";

const Intro = () => {
	return (
		<section>
			<div className="max-w-[1280px] mx-auto mt-[10px] h-[82px]">
				<div className="grid grid-cols-[auto_1fr_auto] items-center justify-center">
					{/* Daily Info */}

					<div className="inline-flex flex-col flex-start gap-[10px]">
						<div className="flex items-center gap-[15px]">
							<img src={Menu} alt="Menu" />
							<img src={Search} alt="Search" />
						</div>
						<div className="flex items-center gap-[10px] h-[20px] ">
							<img src={Date} alt="Calender" />
							<p className="text-sm text-CBlack leading-7">মঙ্গলবার, ১৬ই জানুয়ারি, ২০২৪</p>
						</div>
					</div>
					{/* Logo */}

					<div className="flex justify-center">
						<Link to="/">
							<img src={Logo} className="h-[50px]" alt="Logo" />
						</Link>
					</div>
					{/* Logs */}

					<div className="inline-flex items-center gap-[15px]  ">
						<img src={Dark} alt="Theme Change" />
						<div className="flex gap-[4px] h-[30px] items-center px-[15px] py-[5px] border border-solid border-Secondary rounded-[6px] ">
							<img src={LanIcon} alt="Language Icon" />
							<p className="text-CBlack text-sm leading-7">বাং</p>
						</div>
						<button className="px-[15px] py-[5px] border h-[30px] rounded-[5px] bg-COrange text-white text-center text-xs font-bold">
							লগ ইন
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
