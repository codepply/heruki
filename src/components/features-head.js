import React from "react";
import server from "../images/server.png";

export default function Head() {
	return (
		<section className='feature-head bg-primary py-3'>
			<div className='container grid'>
				<div>
					<h1 className='xl'>Features</h1>
					<p className='lead'>
						Check out the features of Heruki that separate us from the
						competition
					</p>
				</div>
				<img src={server} alt='' />
			</div>
		</section>
	);
}
