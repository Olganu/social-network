import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.photo}>
                <img src="https://cdn.pixabay.com/photo/2020/01/05/02/19/nature-4742132__340.jpg" alt="img" />
            </div>
            <div className={classes.descriptionBlock}>
                <img src="https://avatarko.ru/img/avatar/20/zhivotnye_kot_19144.jpg" alt="img" />
                <div className={classes.item}>
                    Profiles
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo;