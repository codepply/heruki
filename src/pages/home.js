import React, {Component} from "react";
import Showcase from "../components/showcase";
import Stats from "../components/stats";
import Cli from "../components/cli";
import Cloud from "../components/cloud";
import Languages from "../components/languages";
import Footer from "../components/footer";
export default class Home extends Component {
	render() {
		return (
			<div>
				<Showcase />
				<Stats />
				<Cli />
				<Cloud />
				<Languages />
				<Footer />
			</div>
		);
	}
}
