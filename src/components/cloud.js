import React from "react";
import {Link} from "react-router-dom";
import cloud from "../images/cloud.png";

export default function Cloud() {
	return (
		<section className='cloud bg-primary my-2 py-2'>
			<div className='container grid'>
				<div className='text-center'>
					<h2 className='lg'>Extreme Cloud Hosting</h2>
					<p className='lead my-1'>
						Cloud hosting like you`ve never seen. Fast, Efficient and Scalable
					</p>
					<Link className='a-link btn btn-dark' to='/features'>
						Read More
					</Link>
				</div>
				<img src={cloud} alt='cloud cap' />
			</div>
		</section>
	);
}
