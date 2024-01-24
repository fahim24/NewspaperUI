import Logo from "../../../assets/images/Logo/logo.png";
import FacebookI from "../../../assets/images/icons/facebook.svg";
import InstragramI from "../../../assets/images/icons/instagram.svg";
import TwitterI from "../../../assets/images/icons/twitter.svg";
import YoutubeI from "../../../assets/images/icons/youtube.svg";
import { Link } from "react-router-dom";

const Social = () => {
	return (
		<section>
			<div className="w-[1280px] mx-auto py-[32px]">
				<div className="flex items-center justify-between">
					{/* Logo */}

					<div title="Go to Home">
						<Link to="/">
							<img src={Logo} className="h-[30px]" alt="Logo" />
						</Link>
					</div>
					{/* Social Links */}
					<div className="flex items-start gap-[20px]">
						<a href="https://www.facebook.com/">
							<img src={FacebookI} alt="Facebook Link" title="Go to Generation Facebook Account" />
						</a>
						<a href="https://www.twitter.com/">
							<img src={TwitterI} alt="Twitter Link" title="Go to Generation Twitter Account" />
						</a>
						<a href="https://www.instragram.com/">
							<img
								src={InstragramI}
								alt="Instragram Link"
								title="Go to Generation Instragram Account"
							/>
						</a>
						<a href="https://www.youtube.com/">
							<img src={YoutubeI} alt="Youtube Link" title="Go to Generation Youtube Account" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Social;
