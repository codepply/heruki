import React from "react";
import cli from "../images/cli.png";

export default function Cli() {
	return (
		<section className='cli'>
			<div className='container grid'>
				<img src={cli} alt='cli part' />
				<div className='card'>
					<h3>Easy to use, cross platform CLI</h3>
				</div>
				<div className='card'>
					<h3>Deploy in seconds</h3>
				</div>
			</div>
		</section>
	);
}
