import Logo from "../../../assets/logo.svg";
import FacebookI from "../../../assets/images/icons";
import { Link } from "react-router-dom";

const Social = () => {
	return (
		<section>
			<div className="px-[20rem] py-[32px]">
				<div className="flex items-center justify-between">
					<div className="">
						<Link to="/">
							<img src={Logo} className="h-[30px]" alt="Logo" />
						</Link>
					</div>
					<div className="flex gap-3 text-lg">
						<a href="https://www.facebook.com/">
							<FontAwesomeIcon icon={faFacebook} />
						</a>
						<a href="https://www.twitter.com/">
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a href="https://www.instragram.com/">
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a href="https://www.youtube.com/">
							<FontAwesomeIcon icon={faYoutube} />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Social;
