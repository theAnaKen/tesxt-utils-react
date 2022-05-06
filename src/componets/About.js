import React, { useState } from "react";

export default function About() {
	let darkThemeCSS = {
		color: "#333",
		backgroundColor: "#eee",
	};

	const [myStyle, SetMyStyle] = useState(darkThemeCSS);

	const [ButtonText, setButtonText] = useState("Enable Dark mode");

	const ToggleStyle = () => {
		if (myStyle.color === "#eee") {
			SetMyStyle({
				color: "#333",
				backgroundColor: "#eee",
				// outline: "1em solid red",
			});

			document.getElementsByTagName("Body")[0].style.backgroundColor =
				"#efefef";

			document.getElementsByTagName("Body")[0].style.color = "#333";

			setButtonText("Enable Dark mode");
		} else {
			SetMyStyle({
				color: "#eee",
				backgroundColor: "#333",
			});

			document.getElementsByTagName("Body")[0].style.backgroundColor =
				"#222";
			document.getElementsByTagName("Body")[0].style.color = "#efefef";
			setButtonText("Enable Light mode");
		}
	};
	return (
		<div className="container" style={myStyle}>
			<h1 className="my-3">About Us</h1>
			<div className="accordion" id="accordionExample">
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingOne">
						<button
							className="accordion-button"
							type="button"
							style={myStyle}
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne">
							Accordion Item #1
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample">
						<div className="accordion-body" style={myStyle}>
							<strong>
								This is the first item's accordion body.
							</strong>{" "}
							It is shown by default, until the collapse plugin
							adds the appropriate classes that we use to style
							each element. These classes control the overall
							appearance, as well as the showing and hiding via
							CSS transitions. You can modify any of this with
							custom CSS or overriding our default variables. It's
							also worth noting that just about any HTML can go
							within the <code>.accordion-body</code>, though the
							transition does limit overflow.
						</div>
					</div>
				</div>
				<div className="accordion-item" style={myStyle}>
					<h2 className="accordion-header" id="headingTwo">
						<button
							className="accordion-button collapsed"
							style={myStyle}
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo">
							Accordion Item #2
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample">
						<div className="accordion-body" style={myStyle}>
							<strong>
								This is the second item's accordion body.
							</strong>{" "}
							It is hidden by default, until the collapse plugin
							adds the appropriate classes that we use to style
							each element. These classes control the overall
							appearance, as well as the showing and hiding via
							CSS transitions. You can modify any of this with
							custom CSS or overriding our default variables. It's
							also worth noting that just about any HTML can go
							within the <code>.accordion-body</code>, though the
							transition does limit overflow.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingThree">
						<button
							className="accordion-button collapsed"
							style={myStyle}
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree">
							Accordion Item #3
						</button>
					</h2>
					<div
						id="collapseThree"
						className="accordion-collapse collapse"
						aria-labelledby="headingThree"
						data-bs-parent="#accordionExample">
						<div className="accordion-body" style={myStyle}>
							<strong>
								This is the third item's accordion body.
							</strong>
							It is hidden by default, until the collapse plugin
							adds the appropriate classes that we use to style
							each element. These classes control the overall
							appearance, as well as the showing and hiding via
							CSS transitions. You can modify any of this with
							custom CSS or overriding our default variables. It's
							also worth noting that just about any HTML can go
							within the <code>.accordion-body</code>, though the
							transition does limit overflow.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
