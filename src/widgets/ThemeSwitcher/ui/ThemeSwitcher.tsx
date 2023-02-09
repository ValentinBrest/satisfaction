import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import cl from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()
    
    return (
        <button 
            onClick={toggleTheme} 
            className={classNames(cl.ThemeSwitcher, {}, [className])}
        >
            TOGGLE
        </button>
    )
}