import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss'
import {Routes, Route, Link} from 'react-router-dom'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {THEME, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} /><Route path={'/'} element={<MainPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;