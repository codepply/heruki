import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfo} from "@fortawesome/free-solid-svg-icons";

export default function Main() {
	return (
		<section className='docs-main my-4'>
			<div className='container grid'>
				<div className='card bg-light p-3'>
					<h3 className='my-2'>Essentials</h3>
					<nav>
						<ul>
							<li>
								<Link class='text-primary a-link' to='/docs'>
									Introduction
								</Link>
							</li>
							<li>
								<Link className='a-link' to='/docs'>
									About Loruki
								</Link>
							</li>
							<li>
								<Link className='a-link' to='/docs'>
									Installation
								</Link>
							</li>
						</ul>
					</nav>

					<h3 class='my-2'>Deployment</h3>
					<nav>
						<ul>
							<li>
								<Link className='a-link' to='/docs'>
									Setting up a container
								</Link>
							</li>
							<li>
								<Link className='a-link' to='/docs'>
									Using the CLI
								</Link>
							</li>
							<li>
								<Link className='a-link' to='/docs'>
									Managing resources
								</Link>
							</li>
							<li>
								<Link className='a-link' to='/docs'>
									Upgrade & downgrade
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className='card'>
					<h2>Introduction</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						illo facere perferendis laborum? Similique recusandae incidunt eos
						dolorum aliquam ipsam unde perspiciatis laudantium totam quam
						laborum velit, at maxime minus?
					</p>

					<div className='alert alert-success'>
						<FontAwesomeIcon className='icon' icon={faInfo} /> Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Quae, animi?
					</div>

					<h3>Lorem, ipsum dolor.</h3>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
						totam magni eius vitae velit id, atque veritatis! At, vero porro.
					</p>
					<Link to='/docs' className='btn btn-primary a-link'>
						Install CLI
					</Link>

					<h3>Requirements</h3>
					<ul>
						<li>Windows 10, Mac OSX, Linux</li>
						<li>Node.js v12 or higher</li>
					</ul>

					<h3>Install</h3>
					<p>Mac (Homebrew)</p>
					<pre>
						<code>$ brew install loruki-cli</code>
					</pre>
					<p>NPM</p>
					<pre>
						<code>$ npm install loruki-cli</code>
					</pre>
					<p>Yarn</p>
					<pre>
						<code>$ yarn install loruki-cli</code>
					</pre>
				</div>
			</div>
		</section>
	);
}
