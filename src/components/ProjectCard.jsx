import React from "react";
import express from "../assets/img/expressjs-icon.svg";
const ProjectCard = ({ img }) => {
	return (
		<>
			{/* <div className=" sm:flex relative rounded-lg overflow-hidden gap-2"> */}
			<div className="proj-imgbx ">
				<img src={img} alt="card image" className="w-50 h-40" />
				<div className="px-6 py-4">
					<p className="text-gray-700 text-base">
						Card description or other content
					</p>
				</div>
				<div className="proj-txtx">
					<h4>jajd</h4>
					<span>ahdfsdfs</span>
				</div>
			</div>
			{/* <div className="proj-imgbx w-30">
          <img src={express} alt="card image" className="w-50 h-40" />
          <div className="px-6 py-4">
            <p className="text-gray-700 text-base">
              Card description or other content
            </p>
          </div>
          <div className="proj-txtx">
            <h4>jajd</h4>
            <span>ahdfsdfs</span>
          </div>
        </div>
        <div className="proj-imgbx w-30">
          <img src={express} alt="card image" className="w-50 h-40" />
          <div className="px-6 py-4">
            <p className="text-gray-700 text-base">
              Card description or other content
            </p>
          </div>
          <div className="proj-txtx">
            <h4>jajd</h4>
            <span>ahdfsdfs</span>
          </div>
        </div> */}
			{/* </div> */}
		</>
	);
};
export default ProjectCard;
