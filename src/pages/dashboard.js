import React, {Component} from "react";
import Footer from "../components/footer";
import axios from "axios";

const jwtToken = sessionStorage.getItem("jwtToken");

export default class Dashboard extends Component {
	state = {
		name: "",
		image: "",
		email: "",
	};

	componentDidMount() {
		axios
			.get("https://heruki-app.herokuapp.com/auth/user", {
				headers: {
					Authorization: jwtToken,
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
				<div className='container'>
					<h1>Dashboard page. Welcome!</h1>
					<h3>Hello: {this.state.name}</h3>
					<h3>Email: {this.state.email}</h3>
				</div>
				<Footer />
			</>
		);
	}
}
