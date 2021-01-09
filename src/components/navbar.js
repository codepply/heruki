import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export default class Navbar extends Component {
	render() {
		return (
			<div className='navbar'>
				<div className='container flex'>
					<h1>
						<NavLink className='logo' to='/'>
							Heruki.
						</NavLink>
					</h1>
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
							<li>
								<a className='a-link' href='http://localhost:8080/auth/google'>
									Login
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}
