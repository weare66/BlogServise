import React from 'react';
import './Counter.scss';

export const Counter = () => {
  
    const [isCount, setIsCount] = React.useState(0);
  

    const inc = () => {
        setIsCount(isCount + 1)
    }

    return (
    <div>
        <h1>{isCount}</h1>
        
        <button onClick={inc}>+</button>
    </div>
  )
}
