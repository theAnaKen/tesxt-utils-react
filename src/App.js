import "./App.css";
import Navbar from "./componets/Navbar";
import TextForm from "./componets/TextForm";

function App() {
	return (
		<>
			<Navbar title="Text Utils" aboutText="About Text Utils" />
			<div className="container">
				<TextForm heading="Enter the text to analyse" />
			</div>
		</>
	);
}

export default App;
