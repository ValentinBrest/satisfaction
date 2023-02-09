import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import cl from './ThemeSwitcher.module.scss'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()
    
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme} 
            className={classNames(cl.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon />:<LightIcon />}
        </Button>
    )
}