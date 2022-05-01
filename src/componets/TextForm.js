import React, { useState } from "react";

export default function TextForm(props) {
	const handleUpClick = () => {
		setText(text.toUpperCase());
	};

	const handleOnChange = (e) => {
		setText(e.target.value);
	};

	const [text, setText] = useState("");
	return (
		<>
			<div className="mb-3">
				<label htmlFor="myBox" className="form-label">
					<h2>{props.heading}:</h2>
				</label>
				<textarea
					placeholder="Enter Text Here"
					value={text}
					onChange={handleOnChange}
					className="form-control"
					id="myBox"
					rows="10"></textarea>
			</div>
			<button onClick={handleUpClick} className="btn btn-primary">
				Convert to UPPER CASE
			</button>
		</>
	);
}
