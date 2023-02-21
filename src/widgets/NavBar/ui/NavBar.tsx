import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import cl from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({className}: NavBarProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cl.NavBar, {}, [className])}>
            
            <div className={cl.links}>
                <AppLink 
                    theme={AppLinkTheme.INVERTED} 
                    to={RoutePath.about} 
                    className={cl.mainLink}
                >
                    {t('ssylka-o-saite')}
                </AppLink>
                <AppLink 
                    theme={AppLinkTheme.INVERTED} 
                    to={RoutePath.main}
                >
                    {t('ssylka-glavnaya')}
                </AppLink>
            </div>
            
        </div>
    );
};