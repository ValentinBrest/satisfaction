import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localstorage';
import { Theme } from '../../../const/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface useThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme ():useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);
    
    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
        case Theme.LIGHT: 
            newTheme = Theme.DARK ;
            break;
        case Theme.DARK: 
            newTheme = Theme.ORANGE ;
            break;
        case Theme.ORANGE: 
            newTheme = Theme.LIGHT ;
            break;
        default:
            newTheme = Theme.LIGHT;
        }
        theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}