import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';
import cl from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({className}: NavBarProps) => {
    return (
        <div className={classNames(cl.NavBar, {}, [className])}>
            <div className={cl.links}>
                <AppLink to="/about" className={cl.mainLink}>О сайте</AppLink>
                <AppLink to="/">Главная</AppLink>
            </div>
            
        </div>
    )
}