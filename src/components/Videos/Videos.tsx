import { Link } from "react-router-dom";
import Video from "../../assets/images/icons/video.svg";
import NC1 from "../../assets/images/News/newsCover19.jpg";
import NC2 from "../../assets/images/News/newsCover20.jpg";
import NC3 from "../../assets/images/News/newsCover21.jpg";
import { useState } from "react";

const Videos = () => {
	const [isHovered1, setIsHovered1] = useState(false);
	const [isHovered2, setIsHovered2] = useState(false);
	const [isHovered3, setIsHovered3] = useState(false);
	const [isHovered4, setIsHovered4] = useState(false);

	const handleMouseOver1 = () => {
		setIsHovered1(true);
	};
	const handleMouseOut1 = () => {
		setIsHovered1(false);
	};
	const handleMouseOver2 = () => {
		setIsHovered2(true);
	};
	const handleMouseOut2 = () => {
		setIsHovered2(false);
	};
	const handleMouseOver3 = () => {
		setIsHovered3(true);
	};
	const handleMouseOut3 = () => {
		setIsHovered3(false);
	};
	const handleMouseOver4 = () => {
		setIsHovered4(true);
	};
	const handleMouseOut4 = () => {
		setIsHovered4(false);
	};

	return (
		<section>
			<div className="container mx-auto ">
				{/* Section Head */}

				<div className="flex justify-center items-center gap-6 ">
					<div className="border border-solid border-ClGray w-full"> </div>
					<div className="text-CBlue hover:text-COrange items-center text-2xl font-bold">
						<Link to="/travel">ভিডিও</Link>
					</div>

					<div className="border border-solid border-ClGray w-full"> </div>
				</div>
				{/* Section Body */}
				<div className="flex flex-col xl:flex-row items-center gap-4 my-6">
					<div className="flex flex-col sm:flex-row items-center gap-4">
						{/* News 1 */}
						<div className="flex flex-col items-start gap-4">
							<div
								className="w-[296px] h-[167px] relative"
								onMouseOver={handleMouseOver1}
								onMouseOut={handleMouseOut1}
							>
								<img src={NC1} alt="" className="w-full h-full object-cover " />
								<div className="absolute w-full h-full top-0 left-0 overlay2" />
								<img
									src={Video}
									alt=""
									className={`absolute top-[54px] left-[118px] w-[60px] h-[60px] cursor-pointer ${
										isHovered1 ? "animate-pulse" : ""
									}`}
								/>
							</div>
							<div className="flex flex-col items-start gap-4">
								<h4 className="text-COrange text-xl font-bold w-[296px]">
									<a href="#">ঢাকায় বাসাবাড়িতে লাকড়ির চুলায় রান্না কেন</a>
								</h4>
								<p className="text-CGray text-sm">২ ঘণ্টা আগে</p>
							</div>
						</div>
						<div className="border border-solid border-ClGray sm:h-[277px]"> </div>
						{/* News 2 */}
						<div className="flex flex-col items-start gap-4">
							<div
								className="w-[296px] h-[167px] relative"
								onMouseOver={handleMouseOver2}
								onMouseOut={handleMouseOut2}
							>
								<img src={NC2} alt="" className="w-full h-full object-cover" />
								<div className="absolute w-full h-full top-0 left-0 overlay2" />
								<img
									src={Video}
									alt=""
									className={`absolute top-[54px] left-[118px] w-[60px] h-[60px] cursor-pointer ${
										isHovered2 ? "animate-pulse" : ""
									}`}
								/>
							</div>
							<div className="flex flex-col items-start gap-[16px]">
								<h4 className="text-CBlue hover:text-COrange text-xl font-bold w-[296px]">
									<a href="#">ঢাকায় বাসাবাড়িতে লাকড়ির চুলায় রান্না কেন</a>
								</h4>
								<p className="text-CGray text-sm">২ ঘণ্টা আগে</p>
							</div>
						</div>
					</div>
					<div className="border border-solid border-ClGray  xl:h-[277px]"> </div>
					<div className="flex flex-col sm:flex-row items-center gap-4">
						{/* News 3 */}
						<div className="flex flex-col items-start gap-4">
							<div
								className="w-[296px] h-[167px] relative"
								onMouseOver={handleMouseOver3}
								onMouseOut={handleMouseOut3}
							>
								<img src={NC1} alt="" className="w-full h-full object-cover" />
								<div className="absolute w-full h-full top-0 left-0 overlay2" />
								<img
									src={Video}
									alt=""
									className={`absolute top-[54px] left-[118px] w-[60px] h-[60px] cursor-pointer ${
										isHovered3 ? "animate-pulse" : ""
									}`}
								/>
							</div>
							<div className="flex flex-col items-start gap-4">
								<h4 className="text-CBlue hover:text-COrange text-xl font-bold w-[296px]">
									<a href="#">ঢাকায় বাসাবাড়িতে লাকড়ির চুলায় রান্না কেন</a>
								</h4>
								<p className="text-CGray text-sm">২ ঘণ্টা আগে</p>
							</div>
						</div>
						<div className="border border-solid border-ClGray sm:h-[277px]"> </div>
						{/* News 4 */}
						<div className="flex flex-col items-start gap-4">
							<div
								className="w-[296px] h-[167px] relative"
								onMouseOver={handleMouseOver4}
								onMouseOut={handleMouseOut4}
							>
								<img src={NC3} alt="" className="w-full h-full object-cover" />
								<div className="absolute w-full h-full top-0 left-0 overlay2" />
								<img
									src={Video}
									alt=""
									className={`absolute top-[54px] left-[118px] w-[60px] h-[60px] cursor-pointer ${
										isHovered4 ? "animate-pulse" : ""
									}`}
								/>
							</div>
							<div className="flex flex-col items-start gap-4">
								<h4 className="text-CBlue hover:text-COrange text-xl font-bold w-[296px]">
									<a href="#">ঢাকায় বাসাবাড়িতে লাকড়ির চুলায় রান্না কেন</a>
								</h4>
								<p className="text-CGray text-sm">২ ঘণ্টা আগে</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Videos;
