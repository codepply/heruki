import React from "react";
import node_logo from "../images/logos/node.png";
import clojure_logo from "../images/logos/clojure.png";
import csharp_logo from "../images/logos/csharp.png";
import php_logo from "../images/logos/php.png";
import python_logo from "../images/logos/python.png";
import ruby_logo from "../images/logos/ruby.png";
import scala_logo from "../images/logos/scala.png";

const cards = [
	{
		name: "Node.js",
		logo: node_logo,
	},
	{
		name: "Python",
		logo: python_logo,
	},
	{
		name: "C#",
		logo: csharp_logo,
	},
	{
		name: "Ruby",
		logo: ruby_logo,
	},
	{
		name: "PHP",
		logo: php_logo,
	},
	{
		name: "Scala",
		logo: scala_logo,
	},
	{
		name: "Clojure",
		logo: clojure_logo,
	},
];
export default function Languages() {
	return (
		<section className='languages'>
			<h2 className='md text-center my-2'>Supported Languages</h2>
			<div className='container flex'>
				{cards.map((card, index) => {
					return (
						<div className='card' key={index}>
							<h4>{card.name}</h4>
							<img src={card.logo} alt={card.name} />
						</div>
					);
				})}
			</div>
		</section>
	);
}
