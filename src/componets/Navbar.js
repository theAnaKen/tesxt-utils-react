import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	aboutText: PropTypes.string,
};

Navbar.defaultProps = {
	title: "Set Title Here",
	aboutText: "About Text Here",
};

export default function Navbar(props) {
	return (
		<nav
			className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					{props.title}
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link
								className="nav-link "
								aria-current="page"
								to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about">
								{props.aboutText}
							</Link>
						</li>
					</ul>
					<div className="d-flex">
						<div
							className="bg-primary rounded mx-2"
							style={{
								height: "1.8rem",
								width: "1.8rem",
								cursor: "pointer",
								fontSize: "1.5rem",
								outline: "1px solid #eee",
							}}
							onClick={() => {
								props.toggleMode("primary");
							}}>
							{" "}
						</div>
						<div
							className="bg-danger rounded mx-2"
							style={{
								height: "1.8rem",
								width: "1.8rem",
								outline: "1px solid #eee",
								cursor: "pointer",
							}}
							onClick={() => {
								props.toggleMode("danger");
							}}></div>
						<div
							className="bg-warning rounded mx-2"
							style={{
								height: "1.8rem",
								width: "1.8rem",
								cursor: "pointer",
							}}
							onClick={() => {
								props.toggleMode("warning");
							}}></div>

						<div
							className="bg-success rounded mx-2"
							style={{
								height: "1.8rem",
								width: "1.8rem",
								cursor: "pointer",
								outline: "1px solid #eee",
							}}
							onClick={() => {
								props.toggleMode("success");
							}}></div>
					</div>
					<div
						className={`form-check form-switch text-${
							props.mode === "light" ? "dark" : "light"
						}`}>
						<h6>
							<abbr title="Press the color palatte again for dark/Light theme">
								Toggle B/w dark/Light mode
							</abbr>
						</h6>
					</div>
				</div>
			</div>
		</nav>
	);
}
