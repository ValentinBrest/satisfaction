import { memo, useState } from 'react';
import OpenMenu from 'shared/assets/icons/sidebar/menu.svg';
import CloseMenu from 'shared/assets/icons/sidebar/xmark.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cl from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({className}: SidebarProps) => {
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
                theme={ButtonTheme.CLEAR}
                onClick={onToggle}
                square
                size={ButtonSize.M}
            >
                {collapsed ? <OpenMenu className={cl.icon}/> : <CloseMenu className={cl.icon}/>}
            </Button>
            <div className={cl.items}>
                {SidebarItemsList.map(item => (
                    <SidebarItem item={item} key={item.path} collapsed={collapsed}/>
                ))}
            </div>
            <div className={cl.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} className={cl.lang}/>
            </div>
        </div>
    );
});