import React from "react";

export default function Alert(props) {
	const capitalize = (word) => {
		const lower = word.toLowerCase();
		return lower.charAt(0).toUpperCase() + lower.slice(1);
	};

	const myStyle = { height: ".5rem", marginBlockEnd: "0.25em" };

	return (
		<div style={myStyle}>
			{props.alert && ( // props.alert !== null
				<div>
					<div
						className={`alert alert-${props.alert.type} alert-dismissible fade show`}
						role="alert">
						<strong>{capitalize(props.alert.type)}</strong>{" "}
						{capitalize(props.alert.msg)}
					</div>
				</div>
			)}
		</div>
	);
}
