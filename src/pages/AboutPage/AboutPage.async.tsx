import React from 'react';

export const AboutPageAsync = React.lazy(() => 
   

   
    new Promise(resolve => {

    //    @ts-ignore
    // В реал проектах не нужно
        setTimeout(() => resolve(import('./AboutPage')), 1500)
    })
    );

    // export const AboutPageAsync = React.lazy(() => import('./AboutPage'))
    
    // import('./AboutPage')