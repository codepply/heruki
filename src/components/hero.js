import React from "react";

export default function Hero(props) {
	return (
		<div className='hero'>
			<h1 className='text-center'>{props.text}</h1>
		</div>
	);
}
