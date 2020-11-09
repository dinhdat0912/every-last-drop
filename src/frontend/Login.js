import React from "react";

import "./bootstrap-import.js";
import { ImCog } from "react-icons/im";

import barImage from "../../assets/bar-stock.jpg";
import "./login.css";


class Login extends React.Component {

	componentDidMount() {
		$("main").css("backgroundImage",`linear-gradient(
											rgba(0, 0, 0, 0.75),
											rgba(0, 0, 0, 0.75)),
										url(${barImage})`);
	}

	settingsClick(event){
		event.preventDefault();
		alert("Settings")
	}

	toMenuClick(event){
		event.preventDefault();
		alert("Menu")
	}

	render() {
		return <>

			<form className="text-center" onSubmit={this.toMenuClick} noValidate>

				<button className="settings-button btn btn-lg" onClick={this.settingsClick}><ImCog size={32} /></button>
				<h1 className="h1 mb-4 font-weight-normal">Every Last Drop</h1>

				<label>
					<input id="name" className="form-control form-control-secondary" placeholder="Full Name" required autoFocus />
				</label>

				<label>
					<input type="date" id="dob" className="form-control form-control-secondary" required />
				</label>

				<button className="btn btn-lg btn-secondary btn-block mt-4" type="submit">Continue to Menu</button>
				<p className="mt-5 mb-0 text-muted">CPSC 2221 | W01 | Group 12</p>
			</form>
		</>;
	}
}
export default Login;
