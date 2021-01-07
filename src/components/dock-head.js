import React from "react";
import docs_img from "../images/docs.png";

export default function Head() {
	return (
		<section className='docs-head bg-primary py-3'>
			<div className='container grid'>
				<div>
					<h1 className='xl'>Docs</h1>
					<p className='lead'>Learn how to work with the Loruki platform</p>
				</div>
				<img src={docs_img} alt='' />
			</div>
		</section>
	);
}
