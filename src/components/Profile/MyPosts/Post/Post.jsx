import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9rOZx9AhcQBoCufxdIRBAe7Vf3sVFUj_Fg&usqp=CAU" alt="ava" />
            {props.message}
            <div>
                <span>like</span>
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post;