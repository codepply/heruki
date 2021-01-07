import React from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faGithub,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
	return (
		<footer className='footer bg-dark py-5'>
			<div className='container grid grid-3'>
				<div>
					<h1>Heruki</h1>
					<p>Copyright &copy; 2020</p>
				</div>
				<nav>
					<ul>
						<li>
							<NavLink className='a-link' to='/'>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink className='a-link' to='/features'>
								Features
							</NavLink>
						</li>
						<li>
							<NavLink className='a-link' to='/docs'>
								Docs
							</NavLink>
						</li>
					</ul>
				</nav>
				<div className='social'>
					<a
						rel='noreferrer'
						target='_blank'
						className='a-link'
						href='https://www.linkedin.com/in/muhammad-bobojonov/'
					>
						<FontAwesomeIcon size='2x' icon={faLinkedin} />
					</a>
					<a
						rel='noreferrer'
						target='_blank'
						className='a-link'
						href='https://github.com/codepply'
					>
						<FontAwesomeIcon size='2x' icon={faGithub} />
					</a>
					<a
						rel='noreferrer'
						target='_blank'
						className='a-link'
						href='https://www.youtube.com/channel/UCXqZTYjLiAIYAeem2TU7qkw'
					>
						<FontAwesomeIcon size='2x' icon={faYoutube} />
					</a>
				</div>
			</div>
		</footer>
	);
}
