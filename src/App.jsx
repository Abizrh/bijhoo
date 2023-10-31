import "./App.css";
import { Card, Button } from "flowbite-react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
function App() {
	return (
		<>
			<div className="h-auto">
				{/* <h1 className="dark:text-red-600">Halooo</h1> */}
				<NavBar />
				<Banner />
				<Skills />
				<Projects />
				<Footer />
			</div>
		</>
	);
}

export default App;
