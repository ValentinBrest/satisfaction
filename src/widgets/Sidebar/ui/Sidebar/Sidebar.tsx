import { useState } from 'react';
import OpenMenu from 'shared/assets/icons/sidebar/menu.svg';
import CloseMenu from 'shared/assets/icons/sidebar/xmark.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ThemeButton } from 'shared/ui';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import cl from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
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
            <div className={cl.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cl.lang}/>
            </div>
        </div>
    );
};