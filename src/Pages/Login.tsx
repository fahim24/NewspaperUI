const Login = () => {
	return (
		<section className="container mx-auto px-2.5 flex justify-center">
			<form className="flex flex-col gap-4 mt-6">
				<h3 className="text-4xl font-bold text-CBlue text-center">Log In</h3>
				<p className="text-CGray text-center">Enter your email and password</p>
				<button className="flex items-center justify-center w-full py-1 px-4 rounded text-white bg-CGray hover:bg-CBlue gap-4">
					<img
						className="h-5"
						src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
						alt=""
					/>
					Log in with Google
				</button>
				<div className="flex items-center gap-2">
					<hr className="h-0 border-b border-solid border-ClGray grow" />
					<p className=" text-CGray">or</p>
					<hr className="h-0 border-b border-solid border-ClGray grow" />
				</div>
				<label htmlFor="email" className="text-sm text-start text-CBlue">
					Email
				</label>
				<input
					id="email"
					type="email"
					placeholder="someone@example.com"
					className="flex items-center w-full px-4 py-3 text-sm placeholder:text-CGray bg-ClGray rounded text-CBlack"
				/>
				<label htmlFor="password" className="text-sm text-start text-CBlue">
					Password
				</label>
				<input
					id="password"
					type="password"
					placeholder="Enter a password"
					className="flex items-center w-full px-4 py-3 text-sm placeholder:text-CGray bg-ClGray rounded text-CBlack"
				/>
				<div className="flex flex-row justify-between gap-4">
					<label className="relative inline-flex items-center justify-center cursor-pointer gap-2">
						<input type="checkbox" value="" className="" />
						<span className="text-sm  text-CGray">Keep me logged in</span>
					</label>
					<a href="#" className="text-sm text-CGary">
						Forget password?
					</a>
				</div>
				<button className="w-full px-4 py-2 text-sm font-bold text-white rounded hover:bg-CBlue bg-CGray">
					Sign In
				</button>
				<p className="text-sm flex justify-between gap-2 text-CGray">
					Not registered yet?
					<a href="#" className="font-bold text-CGray">
						Create an Account
					</a>
				</p>
			</form>
		</section>
	);
};

export default Login;
