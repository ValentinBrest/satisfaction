import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AboutIcon from 'shared/assets/icons/sidebar/about.svg';
import MainIcon from 'shared/assets/icons/sidebar/main.svg';
import OpenMenu from 'shared/assets/icons/sidebar/menu.svg';
import CloseMenu from 'shared/assets/icons/sidebar/xmark.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme, Button, ButtonSize, ThemeButton } from 'shared/ui';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import cl from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const {t} = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };
    return (
        <div 
            data-testid="sidebar" 
            className={classNames(cl.Sidebar, {[cl.collapsed]: collapsed}, [className])}
        >
            <Button 
                data-testid="sidebar-toggle" 
                theme={ThemeButton.CLEAR}
                onClick={onToggle}
                square
                size={ButtonSize.M}
            >
                {collapsed ? <OpenMenu className={cl.icon}/> : <CloseMenu className={cl.icon}/>}
            </Button>
            <div className={cl.items}>
                <AppLink 
                    theme={AppLinkTheme.INVERTED} 
                    to={RoutePath.main}
                    className={cl.item}
                >
                    <MainIcon className={cl.icon}/>
                    <span className={cl.link}>{t('ssylka-glavnaya')}</span>
                </AppLink>
                <AppLink 
                    theme={AppLinkTheme.INVERTED} 
                    to={RoutePath.about} 
                    className={cl.item}
                >
                    <AboutIcon className={cl.icon}/>
                    <span className={cl.link}>{t('ssylka-o-saite')}</span>
                </AppLink>
            </div>
            <div className={cl.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} className={cl.lang}/>
            </div>
        </div>
    );
};