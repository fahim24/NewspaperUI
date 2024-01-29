import FooterLinks from "./FooterLinks/FooterLinks";
import Social from "./Social/Social";

const Footer = () => {
	return (
		<div>
			<div className="border border-solid border-ClGray container mx-auto mt-20"></div>
			<Social />
			<FooterLinks />
		</div>
	);
};

export default Footer;
