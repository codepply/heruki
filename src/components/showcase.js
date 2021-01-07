import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Showcase extends Component {
	state = {
		name: "",
		companyName: "",
		email: "",
	};

	handleInputVals = (e) => {
		const value = e.target.value;
		this.setState({
			...this.state,
			[e.target.name]: value,
		});
	};

	handleSubmit = () => {};

	render() {
		return (
			<section className='showcase'>
				<div className='container grid'>
					<div className='showcase-text'>
						<h1>Easier Deployment</h1>
						<p>
							Nulla dapibus elementum dolor nec sagittis. Aliquam diam magna,
							pulvinar ac lectus vitae, porta aliquam eros. Praesent egestas non
							lorem eu tempor. Mauris quis tempor odio, quis fermentum velit.
							Morbi dignissim viverra dolor sit amet scelerisque. In
							consectetur, tortor eu sollicitudin sodales, risus est ultricies
							quam, id cursus mauris purus ac enim. Vivamus dictum quam ut est
							lacinia ultrices. Pellentesque velit purus, finibus in hendrerit
							in, sodales sit amet mauris. Phasellus a sapien tempor quam
							placerat iaculis.
						</p>
						<Link to='/features' className='btn btn-outline'>
							Read More
						</Link>
					</div>

					<div className='showcase-form card'>
						<h2>Request a Demo</h2>
						<form>
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
									value={this.state.companyName}
									onChange={this.handleInputVals}
									type='text'
									name='companyName'
									placeholder='Company name'
									required
								/>
							</div>
							<div className='form-control'>
								<input
									value={this.state.email}
									onChange={this.handleInputVals}
									type='email'
									name='email'
									placeholder='Email'
									required
								/>
							</div>
							<button type='submit' className='btn btn-primary'>
								Submit
							</button>
						</form>
					</div>
				</div>
			</section>
		);
	}
}
