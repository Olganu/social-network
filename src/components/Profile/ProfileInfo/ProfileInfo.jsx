import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../commen/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.photo}>
                <img src="https://cdn.pixabay.com/photo/2020/01/05/02/19/nature-4742132__340.jpg" alt="img" />
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt=''/>
               {/* <img src="https://avatarko.ru/img/avatar/ 20/zhivotnye_kot_19144.jpg" alt="img" /> */}
                <div className={classes.item}>
                    Profiles
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo;