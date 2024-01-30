import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="container mx-auto text-center py-10">
			<p className="text-base font-bold text-red-600">404</p>
			<h1 className="mt-4 text-3xl font-bold tracking-tight text-CBlack sm:text-5xl">
				Page not found
			</h1>
			<p className="mt-6 text-base leading-7 text-CGray">
				Sorry, we couldn’t find the page you’re looking for.
			</p>
			<div className="mt-10">
				<button className="rounded-md bg-COrange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ">
					<Link to="/">Go back home</Link>
				</button>
			</div>
		</div>
	);
};

export default NotFound;
