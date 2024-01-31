import Ellipse from "../../../assets/images/icons/ellipse.svg";
const HotNews = () => {
	return (
		<section className="bg-ClGray">
			<div className="container mx-auto py-2 px-2.5 ">
				<div className="flex items-start gap-5">
					<p className="text-sm text-CBlack">শিরোনাম</p>
					<div className="overflow-hidden">
						<div className="whitespace-nowrap flex items-start gap-4 animate-text-slide">
							{/* News Headline 1 */}

							<div className="flex item-center gap-2">
								<img src={Ellipse} alt="ellipse icon" />
								<a href="#" className="text-sm text-CBlack">
									জাতীয় নির্বাচনে ভোটারদের উপস্থিতি আরও বাড়বে : ওবায়দুল কাদের
								</a>
							</div>
							{/* News Headline 2 */}

							<div className="flex item-center gap-2">
								<img src={Ellipse} alt="ellipse icon" />
								<a href="#" className="text-sm text-CBlack">
									জাতীয় নির্বাচনে ভোটারদের উপস্থিতি আরও বাড়বে : ওবায়দুল কাদের
								</a>
							</div>
							{/* News Headline 3 */}

							<div className="flex item-center gap-2">
								<img src={Ellipse} alt="ellipse icon" />
								<a href="#" className="text-sm text-CBlack">
									জাতীয় নির্বাচনে ভোটারদের উপস্থিতি আরও বাড়বে : ওবায়দুল কাদের
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HotNews;
