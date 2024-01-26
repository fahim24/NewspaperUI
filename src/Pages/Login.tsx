const Login = () => {
	return (
		<section className="w-[1280px] mx-auto flex justify-center">
			<form className="flex flex-col gap-[16px] mt-[24px]">
				<h3 className="text-4xl font-bold text-CBlue text-center">Log In</h3>
				<p className="text-CGray text-center">Enter your email and password</p>
				<a className="flex items-center justify-center w-full py-[5px] px-[15px] rounded-[4px] text-white bg-CGray hover:bg-CBlue gap-[16px]">
					<img
						className="h-5"
						src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
						alt=""
					/>
					Log in with Google
				</a>
				<div className="flex items-center gap-[8px]">
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
					className="flex items-center w-full px-[15px] py-[10px] text-sm placeholder:text-CGray bg-ClGray rounded-[5px] text-CBlack"
				/>
				<label htmlFor="password" className="text-sm text-start text-CBlue">
					Password
				</label>
				<input
					id="password"
					type="password"
					placeholder="Enter a password"
					className="flex items-center w-full px-[15px] py-[10px] text-sm placeholder:text-CGray bg-ClGray rounded-[5px] text-CBlack"
				/>
				<div className="flex flex-row justify-between gap-[16px]">
					<label className="relative inline-flex items-center justify-center cursor-pointer gap-[8px]">
						<input type="checkbox" value="" className="" />
						<span className="text-sm  text-CGray">Keep me logged in</span>
					</label>
					<a href="#" className="text-sm text-CGary">
						Forget password?
					</a>
				</div>
				<button className="w-full px-[15px] py-[10px] text-sm font-bold text-white rounded-[5px] hover:bg-CBlue bg-CGray">
					Sign In
				</button>
				<p className="text-sm flex justify-between gap-[8px] text-CGray">
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
