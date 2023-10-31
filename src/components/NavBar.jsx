import React from "react";
import { Navbar } from "flowbite-react";
import { Toggle } from "./Toggle";

const NavBar = () => {
	return (
		<>
			<Navbar fluid={true} className="sticky top-0 z-50" rounded={true}>
				<Navbar.Brand>
					<Toggle />
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Navbar.Link href="/navbars" active={true}>
						Home
					</Navbar.Link>
					<Navbar.Link href="/navbars">Projects</Navbar.Link>
					<Navbar.Link href="/navbars">Blog</Navbar.Link>
					<Navbar.Link href="/navbars">Contact</Navbar.Link>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default NavBar;
