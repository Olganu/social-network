import React from 'react';
import classes from './../Friends.module.css';
import { NavLink } from 'react-router-dom';

const Friend = (props) => {
    let path = "/friends/" + props.id;
    return (
        <div className={classes.item}>
            <NavLink to={path}>
                {props.name}
                {props.surname}
            </NavLink>
               
        
        
        </div>


    )
}

export default Friend;