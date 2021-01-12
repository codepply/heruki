import React, {Component} from "react";
import Footer from "../components/footer";

export default class Dashboard extends Component {
	state = {
		displayName: "",
		image: "",
		email: "",
	};

	componentDidMount(e) {
		const value = e.target.value;
		this.setState({
			...this.state,
			[e.target.name]: value,
		});
	}

	render() {
		return (
			<>
				<div className='container'>
					<h1>Dashboard page. Welcome!</h1>
					<h3>Hello: {this.state.displayName}</h3>
					<img src={this.state.image} alt='' />
					<h3>Email: {this.state.email}</h3>
				</div>
				<Footer />
			</>
		);
	}
}
