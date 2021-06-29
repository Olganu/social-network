import React from 'react';
import preloader from '../../../img/preloader.gif';
import classes from './Pleloader.module.css';

let Preloader = (props) => {
    return <div 
    // style={{backgroundColor:'white'}}
    >
    <img src={ preloader } className={classes.pleloader} alt='spinner' /> 
   </div>
}




export default Preloader;






