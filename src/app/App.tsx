import React, {Suspense} from 'react';
import './styles/index.scss'
import {Routes, Route, Link} from 'react-router-dom'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import AppRouter from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import Sidebar from "widgets/Sidebar";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className='content-page'>
                <Sidebar />
                <AppRouter/>
            </div>
        </div>
    );
};

export default App;