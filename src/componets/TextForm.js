import React, { useState } from "react";

export default function TextForm(props) {
	const handleUpClick = () => {
		setText(text.toUpperCase());
		props.showAlert("converted to uppercase", "success");
	};

	const handleOnChange = (e) => {
		setText(e.target.value);
	};

	const handleLowClick = () => {
		setText(text.toLowerCase());
		props.showAlert("converted to lowercase", "success");
	};

	const handleClear = () => {
		setText("");
		props.showAlert("Cleared Input Field", "success");
	};

	const handleCopy = () => {
		var text = document.getElementById("myBox");
		text.select();
		navigator.clipboard.writeText(text.value);
		document.getSelection().removeAllRanges();
		props.showAlert("coppied text to clipboard", "success");
	};

	const handleExtraSpaces = () => {
		let newText = text.split(/[ ]+/);
		setText(newText.join(" "));
		props.showAlert("removed extra spaces", "success");
	};

	const [text, setText] = useState("");
	return (
		<>
			<div className="mb-3 container">
				<label htmlFor="myBox" className="form-label">
					<h2>{props.heading}:</h2>
				</label>
				<textarea
					placeholder="Enter Text Here"
					value={text}
					onChange={handleOnChange}
					className="form-control"
					id="myBox"
					rows="10"
					style={{
						backgroundColor:
							props.mode === "dark"
								? "hsl(210,11%,20%)"
								: "#F8F9FA",
						color:
							props.mode === "light"
								? "hsl(210,11%,20%)"
								: "#F8F9FA",
					}}></textarea>
				<button
					disabled={text.length === 0}
					onClick={handleUpClick}
					style={{ border: "1px solid #fff" }}
					className="btn btn-primary my-1 mx-1">
					Convert to UPPER CASE
				</button>
				<button
					disabled={text.length === 0}
					onClick={handleClear}
					style={{ border: "1px solid #fff" }}
					className="btn btn-primary my-1 mx-1">
					Clear Text
				</button>
				<button
					disabled={text.length === 0}
					onClick={handleLowClick}
					style={{ border: "1px solid #fff" }}
					className="btn btn-primary my-1 mx-1">
					Convert to lower case
				</button>
				<button
					disabled={text.length === 0}
					style={{ border: "1px solid #fff" }}
					className="btn btn-primary mx-1 my-1"
					onClick={handleCopy}>
					Copy Text
				</button>
				<button
					disabled={text.length === 0}
					style={{ border: "1px solid #fff" }}
					className="btn btn-primary mx-1 my-1"
					onClick={handleExtraSpaces}>
					Remove extra spaces
				</button>
			</div>
			<div className="container-fluid my-2">
				<h1>Your Text Summary</h1>
				<p>
					{
						text.split(" ").filter((e) => {
							return e.length !== 0;
						}).length
					}{" "}
					words, {text.length} characters
				</p>
				<p>
					{0.008 *
						text.split(" ").filter((e) => {
							return e.length !== 0;
						}).length}{" "}
					minutes to read
				</p>
				<h2>preview text</h2>
				<p>{text.length <= 0 ? "Nothing to preview" : text}</p>
			</div>
		</>
	);
}
