import React, {Component} from "react";
import Footer from "../components/footer";
import axios from "axios";
import {Redirect} from "react-router-dom";

export default class SignUp extends Component {
	state = {
		email: "",
		firstName: "",
		lastName: "",
		password: "",
		switchState: true,
		loggedIn: false,
	};

	handleSwitch = () => {
		this.setState((prevState) => {
			return {
				switchState: !prevState.switchState,
			};
		});
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
		if (this.state.switchState) {
			axios
				.post("https://heruki-app.herokuapp.com/auth/sign-up", {
					data: {
						name: `${this.state.firstName} ${this.state.lastName}`,
						email: this.state.email,
						password: this.state.password,
					},
				})
				.then((res) => {
					console.log(res);
					this.setState({
						email: "",
						firstName: "",
						lastName: "",
						password: "",
					});
				});
		} else {
			axios
				.post("https://heruki-app.herokuapp.com/auth/login", {
					data: {
						email: this.state.email,
						password: this.state.password,
					},
				})
				.then((res) => {
					if (res.status === 200) {
						sessionStorage.setItem("jwtToken", res.data.token);
						this.setState({
							loggedIn: true,
						});
					} else {
						console.log("Something went wrong");
					}
					console.log(res);
				});
		}
	};

	render() {
		return (
			<>
				{this.state.loggedIn ? <Redirect to='/dashboard' /> : ""}
				<div className='form'>
					{/* tab group */}
					<ul className='tab-group'>
						<li className={this.state.switchState ? "tab active" : "tab"}>
							<span className='a-switch' onClick={this.handleSwitch}>
								Sign Up
							</span>
						</li>
						<li className={this.state.switchState ? "tab" : "tab active"}>
							<span className='a-switch' onClick={this.handleSwitch}>
								Log In
							</span>
						</li>
					</ul>

					<div className='tab-content'>
						{/* Sign up section */}
						<div
							id='signup'
							style={
								this.state.switchState ? {display: "block"} : {display: "none"}
							}
						>
							<h1 className='form-title'>Sign Up for Free</h1>
							<form onSubmit={this.handleSubmit}>
								<div className='top-row'>
									<div className='field-wrap'>
										<input
											type='text'
											name='firstName'
											required
											autoComplete='off'
											value={this.state.firstName}
											placeholder='First Name'
											onChange={this.handleInputVals}
										/>
									</div>

									<div className='field-wrap'>
										<input
											type='text'
											name='lastName'
											placeholder='Last Name'
											value={this.state.lastName}
											onChange={this.handleInputVals}
											required
											autoComplete='off'
										/>
									</div>
								</div>

								<div className='field-wrap'>
									<input
										type='email'
										name='email'
										value={this.state.email}
										onChange={this.handleInputVals}
										placeholder='Email'
										required
										autoComplete='off'
									/>
								</div>

								<div className='field-wrap'>
									<input
										type='password'
										name='password'
										placeholder='Password'
										value={this.state.password}
										onChange={this.handleInputVals}
										required
										autoComplete='off'
									/>
								</div>

								<button type='submit' className='button button-block'>
									Submit
								</button>
							</form>
						</div>

						{/* login section */}
						<div
							id='login'
							style={
								this.state.switchState ? {display: "none"} : {display: "block"}
							}
						>
							<h1 className='form-title'>Welcome Back!</h1>

							<form onSubmit={this.handleSubmit}>
								<div className='field-wrap'>
									<input
										type='email'
										name='email'
										placeholder='Email'
										value={this.state.email}
										onChange={this.handleInputVals}
										required
										autoComplete='off'
									/>
								</div>

								<div className='field-wrap'>
									<input
										type='password'
										name='password'
										placeholder='Password'
										value={this.state.password}
										onChange={this.handleInputVals}
										required
										autoComplete='off'
									/>
								</div>

								<button type='submit' className='button button-block'>
									Log In
								</button>
							</form>
						</div>
					</div>
				</div>
				<Footer />
			</>
		);
	}
}
