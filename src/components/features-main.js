import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faServer,
	faNetworkWired,
	faLaptopCode,
	faDatabase,
	faPowerOff,
	faUpload,
} from "@fortawesome/free-solid-svg-icons";

const cards = [
	{
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo saepe corrupti et dolorem voluptate at, nostrum rem voluptatem ab alias quia molestiae ea, libero nihil deserunt. Molestias, eum?Necessitatibus`,
		icon: faServer,
	},
	{
		text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        recusandae perferendis culpa, reiciendis a itaque debitis qui vel
        dignissimos ipsum!`,
		icon: faNetworkWired,
	},
	{
		text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
        magnam.`,
		icon: faLaptopCode,
	},
	{
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, a!`,
		icon: faDatabase,
	},
	{
		text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
        magnam.`,
		icon: faPowerOff,
	},
	{
		text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
        magnam.`,
		icon: faUpload,
	},
];

export default function MainFeature() {
	return (
		<section className='features-main my-2'>
			<div className='container grid grid-3'>
				{cards.map((card, index) => {
					return (
						<div className='card flex' key={index}>
							<FontAwesomeIcon className='icon' icon={card.icon} size='3x' />
							<p>{card.text}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
}
