import React from 'react'
import { Counter } from './components/Counter';

import './styles/index.scss';
import { Link, Route , Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { Suspense } from 'react';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';





  // export enum Theme {
  //   LIGHT = 'light',
  //   DARK = 'dark',
  // }

 const App = () => {


  const {theme, toggleTheme} = useTheme();
  // const [theme, setTheme] = React.useState<Theme>(Theme.LIGHT)


  return (
    <div className={`app ${theme}`}>

      <button onClick={toggleTheme}>++</button>

      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>


      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPageAsync/>}/>
          <Route path='/about' element={<AboutPageAsync/>}/>
        </Routes>
      </Suspense>
      
    </div>
  )
}

export default App;