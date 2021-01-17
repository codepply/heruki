import React, {Component} from "react";
import Footer from "../components/footer";
import axios from "axios";
import {Redirect} from "react-router-dom";
import profile from "../images/profile.png";

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.jwtToken = sessionStorage.getItem("jwtToken");
	}

	state = {
		name: "",
		image: "",
		email: "",
	};

	componentDidMount() {
		axios
			.get("https://heruki-app.herokuapp.com/auth/user", {
				headers: {
					Authorization: this.jwtToken,
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			})
			.then((res) => {
				this.setState({
					name: res.data.name,
					email: res.data.email,
				});
			});
	}

	render() {
		return (
			<>
				{this.jwtToken ? "" : <Redirect to='/' />}
				<div className='container'>
					<div className='card text-center'>
						<img className='profile-img' src={profile} alt='profile' />
						<h3>Hello {this.state.name}!</h3>
						<p>Email: {this.state.email}</p>
						<button className='btn btn-primary'>Logout</button>
					</div>
				</div>
				<Footer />
			</>
		);
	}
}
