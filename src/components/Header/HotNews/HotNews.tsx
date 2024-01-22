import Ellipse from "../../../assets/images/icons/ellipse.svg";
const HotNews = () => {
	return (
		<section className="bg-ClGray">
			<div className="px-[20rem] py-[10px] h-auto ">
				<div className="flex items-start  gap-[20px]">
					<div className="text-sm text-CBlack">শিরোনাম</div>
					<div className="overflow-hidden">
						<div className="whitespace-nowrap flex items-start gap-[15px] animate-text-slide">
							<div className="flex item-center gap-[8px]">
								<img src={Ellipse} alt="" />
								<p className="text-sm text-CBlack">
									জাতীয় নির্বাচনে ভোটারদের উপস্থিতি আরও বাড়বে : ওবায়দুল কাদের
								</p>
							</div>
							<div className="flex item-center gap-[8px]">
								<img src={Ellipse} alt="" />
								<p className="text-sm text-CBlack">
									জাতীয় নির্বাচনে ভোটারদের উপস্থিতি আরও বাড়বে : ওবায়দুল কাদের
								</p>
							</div>
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