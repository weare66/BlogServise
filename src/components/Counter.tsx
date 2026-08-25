import React from 'react';
// import * as classes  from './Counter.module.scss';
import classes  from './Counter.module.scss';


export const Counter = () => {
  
    const [isCount, setIsCount] = React.useState(0);
  

    const inc = () => {
        setIsCount(isCount + 1)
    }

    return (
    <div>
        <h1>{isCount}</h1>
        
        <button className={classes.btn} onClick={inc}>+</button>
    </div>
  )
}
