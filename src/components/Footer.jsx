import { defaults } from "autoprefixer";
import Reactf from "react";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
const Footer = () => {
	return (
		<>
			<footer className="footer bg-gray-800 text-white">
				<div className="container mx-auto py-6">
					<div className="flex flex-col lg:flex-row items-center justify-between">
						<div className="w-1/3 flex justify-center lg:justify-start">
							<span className="w-32">Bijhoo </span>
						</div>

						<div className="w-1/3 flex flex-col items-center lg:items-end">
							<div className="flex space-x-4 mb-4">
								<a href="#">
									<img src={navIcon1} alt="Icon" className="w-6 h-6" />
								</a>
								<a href="#">
									<img src={navIcon2} alt="Icon" className="w-6 h-6" />
								</a>
								<a href="#">
									<img src={navIcon3} alt="Icon" className="w-6 h-6" />
								</a>
							</div>
							<p className="text-center lg:text-right">
								Copyright 2022. All Rights Reserved
							</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
