import React from 'react';

// export const MainPageAsync = React.lazy(() => import('./MainPage'));




export const MainPageAsync = React.lazy(() => 
   

   
    new Promise(resolve => {

    //    @ts-ignore
    // В реал проектах не нужно
        setTimeout(() => resolve(import('./MainPage')), 1500)
    })
    );

    // export const AboutPageAsync = React.lazy(() => import('./AboutPage'))
    
    // import('./AboutPage')