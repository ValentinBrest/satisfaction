import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cl from './AppLink.module.scss'

interface AppLinkProps extends LinkProps{
    className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {to, className, children, ...otherProps} = props
    return (
        <Link 
            to={to}
            className={classNames(cl.AppLink, {}, [className])}
            {...otherProps}
            >
            {children}
        </Link>
    )
}
