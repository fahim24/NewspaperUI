import FooterLinks from "./FooterLinks/FooterLinks";
import Social from "./Social/Social";

const Footer = () => {
	return (
		<div>
			<div className="border border-solid border-ClGray w-[1280px] mx-auto mt-[80px]"></div>
			<Social />
			<FooterLinks />
		</div>
	);
};

export default Footer;
