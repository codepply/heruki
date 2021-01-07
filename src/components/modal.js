import React, {Component} from "react";

export default class Modal extends Component {
	render() {
		return (
			<div className={this.props.state ? "modal show-modal" : "modal"}>
				<div className='modal-content'>
					<span onClick={this.props.close} className='close-button'>
						&times;
					</span>
					<h2 className='text-dark sm'>
						We have received your message! We will contact you shortly.
					</h2>
				</div>
			</div>
		);
	}
}
