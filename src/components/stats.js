import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faServer,
	faUpload,
	faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

export default function Stats() {
	return (
		<section className='stats'>
			<div className='container'>
				<h3 className='stats-heading text-center my-1'>
					Welcome to the best platform for building applications of all types
					with modern architecture and scaling
				</h3>
				<div className='grid grid-3 text-center my-4'>
					<div>
						<FontAwesomeIcon icon={faServer} size='3x' />
						<h3>10,349,405</h3>
						<p className='text-secondary'>Deployments</p>
					</div>
					<div>
						<FontAwesomeIcon icon={faUpload} size='3x' />
						<h3>987 TB</h3>
						<p className='text-secondary'>Published</p>
					</div>
					<div>
						<FontAwesomeIcon icon={faProjectDiagram} size='3x' />
						<h3>2,343,265</h3>
						<p className='text-secondary'>Projects</p>
					</div>
				</div>
			</div>
		</section>
	);
}
