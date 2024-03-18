import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { useContext } from 'react';

interface useThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTHeme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTHeme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTHeme);
    };

    return {
        theme,
        toggleTheme,
    };
}
