import React, {Component} from "react";
import Footer from "../components/footer";
import axios from "axios";

export default class SignUp extends Component {
	state = {
		email: "",
		name: "",
		password: "",
	};

	handleInputVals = (e) => {
		const value = e.target.value;
		this.setState({
			...this.state,
			[e.target.name]: value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post("http://localhost:8080/auth/sign-up", {
				data: this.state,
			})
			.then((res) => {
				console.log(res);
			});
	};

	render() {
		return (
			<>
				<div className='container'>
					<h1>Sign up page</h1>
					<form onSubmit={this.handleSubmit}>
						<div className='form-control'>
							<input
								value={this.state.email}
								onChange={this.handleInputVals}
								type='text'
								name='email'
								placeholder='Email'
								required
							/>
						</div>
						<div className='form-control'>
							<input
								value={this.state.name}
								onChange={this.handleInputVals}
								type='text'
								name='name'
								placeholder='Name'
								required
							/>
						</div>
						<div className='form-control'>
							<input
								value={this.state.password}
								onChange={this.handleInputVals}
								type='password'
								name='password'
								placeholder='Password'
								required
							/>
						</div>
						<button type='submit' className='btn btn-primary'>
							Sign Up
						</button>
					</form>
				</div>
				<Footer />
			</>
		);
	}
}
