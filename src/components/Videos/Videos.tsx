import { Link } from "react-router-dom";
import Video from "../../assets/images/icons/video.svg";
import NC1 from "../../assets/images/News/newsCover19.jpg";
import NC2 from "../../assets/images/News/newsCover20.jpg";
import NC3 from "../../assets/images/News/newsCover21.jpg";
import { useState } from "react";

const Videos = () => {
	const [isHovered, setIsHovered] = useState([false, false, false, false]);

	const handleMouseOver = (i: number) => {
		const updatedStates = [...isHovered];
		updatedStates[i] = true;
		setIsHovered(updatedStates);
	};
	const handleMouseOut = (i: number) => {
		const updatedStates = [...isHovered];
		updatedStates[i] = false;
		setIsHovered(updatedStates);
	};

	return (
		<section>
			{/* Section Head */}
			<div className="flex justify-center items-center gap-6 ">
				<div className="border border-solid border-ClGray w-full"> </div>
				<div className="text-CBlue hover:text-COrange items-center text-2xl font-bold">
					<Link to="/travel">ভিডিও</Link>
				</div>
				<div className="border border-solid border-ClGray w-full"> </div>
			</div>
			{/* Section Body */}
			<div className="grid grid-cols-[1fr] md:grid-cols-[1fr_auto_1fr] lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 my-6">
				{/* News 1 */}
				<div className="flex flex-col items-start gap-4">
					<div
						className="h-44 w-full relative vid"
						onMouseOver={() => handleMouseOver(0)}
						onMouseOut={() => handleMouseOut(0)}
					>
						<img src={NC1} alt="" className="w-full h-full object-cover" />
						<div className="absolute w-full h-full top-0 left-0 overlay2" />
						<img
							src={Video}
							alt=""
							className={`absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 cursor-pointer iA ${
								isHovered[0] ? "animate-pulse" : ""
							}`}
						/>
					</div>
					<div className="flex flex-col items-start gap-4">
						<h4 className="text-CBlue hover:text-COrange text-xl font-bold">
							<a href="#">ঢাকায় বাসাবাড়িতে লাকড়ির চুলায় রান্না কেন</a>
						</h4>
						<p className="text-CGray text-sm">২ ঘণ্টা আগে</p>
					</div>
				</div>
				{/* Divider */}
				<div className="border border-solid border-ClGray w-full md:w-[1px] md:h-full"></div>
				{/* News 2 */}
				<div className="flex flex-col items-start gap-4">
					<div
						className="w-full h-44 relative"
						onMouseOver={() => handleMouseOver(1)}
						onMouseOut={() => handleMouseOut(1)}
					>
						<img src={NC2} alt="" className="w-full h-full object-cover" />
						<div className="absolute w-full h-full top-0 left-0 overlay2" />
						<img
							src={Video}
							alt=""
							className={`absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 cursor-pointer ${
								isHovered[1] ? "animate-pulse" : ""
							}`}
						/>
					</div>
					<div className="flex flex-col items-start gap-[16px]">
						<h4 className="text-CBlue hover:text-COrange text-xl font-bold">
							<a href="#">ঢাকায় বাসাবাড়িতে লাকড়ির চুলায় রান্না কেন</a>
						</h4>
						<p className="text-CGray text-sm">২ ঘণ্টা আগে</p>
					</div>
				</div>
				{/* Divider */}
				<div className="border border-solid border-ClGray w-full md:col-span-3 lg:col-span-1 lg:h-full lg:w-[1px]"></div>
				{/* News 3 */}
				<div className="flex flex-col items-start gap-4">
					<div
						className="h-44 w-full relative"
						onMouseOver={() => handleMouseOver(2)}
						onMouseOut={() => handleMouseOut(2)}
					>
						<img src={NC1} alt="" className="w-full h-full object-cover" />
						<div className="absolute w-full h-full top-0 left-0 overlay2" />
						<img
							src={Video}
							alt=""
							className={`absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 cursor-pointer ${
								isHovered[2] ? "animate-pulse" : ""
							}`}
						/>
					</div>
					<div className="flex flex-col items-start gap-4">
						<h4 className="text-CBlue hover:text-COrange text-xl font-bold">
							<a href="#">ঢাকায় বাসাবাড়িতে লাকড়ির চুলায় রান্না কেন</a>
						</h4>
						<p className="text-CGray text-sm">২ ঘণ্টা আগে</p>
					</div>
				</div>
				{/* Divider */}
				<div className="border border-solid border-ClGray w-full md:w-[1px] md:h-full"></div>
				{/* News 4 */}
				<div className="flex flex-col items-start gap-4">
					<div
						className="w-full h-44 relative"
						onMouseOver={() => handleMouseOver(3)}
						onMouseOut={() => handleMouseOut(3)}
					>
						<img src={NC3} alt="" className="w-full h-full object-cover" />
						<div className="absolute w-full h-full top-0 left-0 overlay2" />
						<img
							src={Video}
							alt=""
							className={`absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 cursor-pointer ${
								isHovered[3] ? "animate-pulse" : ""
							}`}
						/>
					</div>
					<div className="flex flex-col items-start gap-4">
						<h4 className="text-CBlue hover:text-COrange text-xl font-bold">
							<a href="#">ঢাকায় বাসাবাড়িতে লাকড়ির চুলায় রান্না কেন</a>
						</h4>
						<p className="text-CGray text-sm">২ ঘণ্টা আগে</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Videos;
