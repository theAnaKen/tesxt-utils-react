import { useState } from "react";
import "./App.css";
import About from "./componets/About";
import Alert from "./componets/Alert";
import Navbar from "./componets/Navbar";
import TextForm from "./componets/TextForm";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};

	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "hsl(210,11%,20%)";
			document.body.style.color = "#eee";
			document.title = "TextUtils - Dark Mode";
			showAlert("Dark mode has been enabled", "success");
		} else {
			setMode("light");
			document.body.style.backgroundColor = "#F8F9FA";
			document.body.style.color = "#212529";
			document.title = "TextUtils - Light Mode";
			showAlert("light mode has been enabled", "success");
		}
		// mode === "light" ? setMode("dark") : setMode("light");
	};
	return (
		<>
			<Router>
				{/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
				{/* <Navbar/> */}
				<Navbar
					title="TextUtils"
					aboutText="About Text Utils"
					mode={mode}
					toggleMode={toggleMode}
				/>
				<Alert alert={alert} />
				<div className="container my-3">
					<Routes>
						<Route
							exact
							path="/about"
							element={<About mode={mode} />}
						/>
						<Route
							exact
							path="/"
							element={
								<TextForm
									heading="Enter the text to analyze below"
									mode={mode}
									showAlert={showAlert}
								/>
							}
						/>
					</Routes>
					{/* <TextForm
					heading="Enter the text to analyze below"
					mode={mode}
					showAlert={showAlert}
				/> */}
				</div>
				{/* <About /> */}
			</Router>
		</>
	);
}

export default App;
