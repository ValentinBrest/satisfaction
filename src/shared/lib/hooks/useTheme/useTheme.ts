import { useContext } from 'react';

import { Theme } from '../../../const/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface useThemeResult {
    toggleTheme: (saveAction?: (theme: Theme) => void) => void;
    theme: Theme;
}

export function useTheme ():useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);
    
    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
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
        setTheme?.(newTheme);

        saveAction?.(newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}