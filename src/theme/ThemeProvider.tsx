import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext} from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME || THEME.LIGHT

const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState(defaultTheme)

    // useMemo т.к. на каждый рендер компонент будет создаваться новый объект (инициализироваться заново)
    // объект каждый раз будет новым, ссылка на него будет новой
    const defaultProps = useMemo(() =>
        ({theme, setTheme}), [theme])
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;