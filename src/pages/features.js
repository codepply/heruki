import React, {Component} from "react";
import Footer from "../components/footer";
import Head from "../components/features-head";
import Subhead from "../components/features-subhead";
import Main from "../components/features-main";

export default class Features extends Component {
	render() {
		return (
			<div>
				<Head />
				<Subhead />
				<Main />
				<Footer />
			</div>
		);
	}
}
