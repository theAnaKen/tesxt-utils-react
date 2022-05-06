import { useState } from "react";
import "./App.css";
import About from "./componets/About";
import Navbar from "./componets/Navbar";
import TextForm from "./componets/TextForm";

function App() {
	const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not

	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "hsl(210,11%,20%)";
			document.body.style.color = "#eee";
		} else {
			setMode("light");
			document.body.style.backgroundColor = "#F8F9FA";
			document.body.style.color = "#212529";
		}
		// mode === "light" ? setMode("dark") : setMode("light");
	};
	return (
		<>
			{/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
			{/* <Navbar/> */}
			<Navbar
				title="TextUtils"
				aboutText="About Text Utils"
				mode={mode}
				toggleMode={toggleMode}
			/>
			<div className="container my-3">
				<TextForm
					heading="Enter the text to analyze below"
					mode={mode}
				/>
			</div>
		</>
	);
}

export default App;
