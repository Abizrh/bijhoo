import { Card } from "flowbite-react";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ProjectCard from "./ProjectCard";
import sabbi from "../assets/img/sabbi-id.png";
import noon from "../assets/img/logo-javascript.svg";

export const Projects = () => {
	const projects = [
		{
			title: "Business Startup",
			description: "Design & Development",
			img: sabbi,
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			img: sabbi,
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			img: sabbi,
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			img: sabbi,
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			img: sabbi,
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			img: sabbi,
		},
	];

	return (
		<>
			<section className="project" id="project">
				<div>
					<div>
						<div>
							<TrackVisibility>
								{({ isVisible }) => (
									<div
										className={
											isVisible ? "animate__animated animate__fadeIn" : ""
										}
									>
										<h2 className="dark:text-white">Projects</h2>
										<p>
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry. Lorem Ipsum has been the industry's
											standard dummy text ever since the 1500s, when an unknown
											printer took a galley of type and scrambled it to make a
											type specimen book.
										</p>
										<div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
											{projects.map((item) => {
												return (
													<div class="relative rounded-lg overflow-hidden">
														<ProjectCard img={item.img} />;
													</div>
												);
											})}{" "}
										</div>
									</div>
								)}
							</TrackVisibility>
						</div>
					</div>
				</div>
				{/* <img className="background-image-right" src={colorSharp2}></img> */}
			</section>
		</>
	);
};
