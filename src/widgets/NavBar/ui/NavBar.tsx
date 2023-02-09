import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cl from './NavBar.module.scss'

interface NavBarProps {
    className?: string;
}

export const NavBar = ({className}: NavBarProps) => {
    return (
        <div className={classNames(cl.NavBar, {}, [className])}>
            <Link to="/about">О сайте</Link>
            <Link to="/">Главная</Link>
        </div>
    )
}