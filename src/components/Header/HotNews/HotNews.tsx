import Ellipse from "../../../assets/images/icons/ellipse.svg";
const HotNews = () => {
	return (
		<section className="bg-ClGray">
			<div className="w-[1280px] mx-auto py-[10px] h-auto ">
				<div className="flex items-start gap-[20px]">
					<p className="text-sm text-CBlack">শিরোনাম</p>
					<div className="overflow-hidden">
						<div className="whitespace-nowrap flex items-start gap-[15px] animate-text-slide">
							{/* News Headline 1 */}

							<div className="flex item-center gap-[8px]">
								<img src={Ellipse} alt="" />
								<p className="text-sm text-CBlack">
									জাতীয় নির্বাচনে ভোটারদের উপস্থিতি আরও বাড়বে : ওবায়দুল কাদের
								</p>
							</div>
							{/* News Headline 2 */}

							<div className="flex item-center gap-[8px]">
								<img src={Ellipse} alt="" />
								<p className="text-sm text-CBlack">
									জাতীয় নির্বাচনে ভোটারদের উপস্থিতি আরও বাড়বে : ওবায়দুল কাদের
								</p>
							</div>
							{/* News Headline 3 */}

							<div className="flex item-center gap-[8px]">
								<img src={Ellipse} alt="" />
								<p className="text-sm text-CBlack">
									জাতীয় নির্বাচনে ভোটারদের উপস্থিতি আরও বাড়বে : ওবায়দুল কাদের
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HotNews;
