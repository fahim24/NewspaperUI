import NC1 from "../../assets/images/News/newsCover9.jpg";

const EnterTainment = () => {
	return (
		<section>
			<div className="w-[1280px] mx-auto ">
				{/* Section Head */}

				<div className="flex justify-center items-center gap-[24px] my-[24px]">
					<div className="border border-solid border-ClGray w-full"> </div>
					<div className="text-CBlue hover:text-COrange items-center text-2xl font-bold">
						বিনোদন
					</div>
					<div className="border border-solid border-ClGray w-full"> </div>
				</div>
				{/* Section Body */}

				<div className="flex gap-[16px]">
					{/* News Section */}

					<div className="flex flex-col gap-[16px]">
						{/* News Row 1 */}

						<div className="flex gap-[16px]">
							{/* News 1 */}

							<div>
								<img className="w-[624px] h-[350px]" src={NC1} />
							</div>
							<div className="border border-solid border-ClGray h-full"> </div>
							<div>
								{/* News 2 */}

								<div>b</div>
								<div className="border border-solid border-ClGray w-full"> </div>
								{/* News 3 */}

								<div>c</div>
							</div>
						</div>
						{/* Line */}

						<div className="border border-solid border-ClGray w-full"> </div>
						{/* News Row 2 */}

						<div className="flex gap-[16px]">
							{/* News 4 */}

							<div>d</div>
							<div className="border border-solid border-ClGray h-full"> </div>
							{/* News 5 */}

							<div>e</div>
							<div className="border border-solid border-ClGray h-full"> </div>
							{/* News 6 */}

							<div>f</div>
						</div>
					</div>

					<div className="border border-solid border-ClGray h-full"> </div>
					{/* Side Section */}

					<div className="flex flex-col gap-[16px]">
						{/* Voting section */}

						<div>g</div>
						<div className="border border-solid border-ClGray w-full"> </div>
						{/* Ads */}

						<div>h</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EnterTainment;
