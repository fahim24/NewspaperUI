import { Link } from "react-router-dom";

interface MyHeaderProps {
	myHeader: string;
	myLink: string;
}
const SectionHeader: React.FC<MyHeaderProps> = ({ myHeader, myLink }) => {
	return (
		<div className=" flex justify-center items-center gap-6 ">
			<div className="border border-solid border-ClGray w-full"> </div>
			<div className="text-CBlue hover:text-COrange items-center text-2xl font-bold">
				<Link to={myLink}>{myHeader}</Link>
			</div>
			<div className="border border-solid border-ClGray w-full"> </div>
		</div>
	);
};

export default SectionHeader;
