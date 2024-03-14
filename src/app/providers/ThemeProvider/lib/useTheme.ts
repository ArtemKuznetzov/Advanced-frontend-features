import {LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext} from "app/providers/ThemeProvider/lib/ThemeContext";
import {useContext} from "react";

interface useThemeResult {
    toggleTheme: () => void
    theme: THEME
}

export function useTheme(): useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTHeme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
        setTheme(newTHeme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTHeme)
    }

    return {
        theme,
        toggleTheme
    }
}