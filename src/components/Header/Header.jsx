import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return (
		<header className={classes.header}>
			<img src="https://cdn.pixabay.com/photo/2017/06/24/20/27/heart-2438744__340.png" alt="logo" />
			<div className={classes.loginBlock}>
				{props.isAuth ? props.login :
				<NavLink to={'/login'}>
					login
				</NavLink> }
			</div>
		</header>
	)
}

export default Header;