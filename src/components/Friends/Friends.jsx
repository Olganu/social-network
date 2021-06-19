import React from 'react';
import classes from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {

    let friendesItem = props.state.sidebar.map(friend => 
        <Friend surname={friend.surname} name={friend.name} id={friend.id} />);

    return (
        <div>
            
            <div className={classes.friends}> 
                { friendesItem }
        
            </div>
            <div>
            
            </div>
        </div>
    )
}

export default Friends;