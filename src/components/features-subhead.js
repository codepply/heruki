import React from "react";
import server2 from "../images/server2.png";

export default function Subhead() {
	return (
		<section className='features-sub-head bg-light py-3'>
			<div className='container grid'>
				<div>
					<h1 className='md'>The Loruki Platform</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
						cupiditate dignissimos temporibus perspiciatis quae! Suscipit qui,
						consectetur ea consequatur, doloribus repellendus quasi, aut
						corporis nam alias culpa. Nostrum, inventore accusantium!
					</p>
				</div>
				<img src={server2} alt='' />
			</div>
		</section>
	);
}
