import { memo, useState } from 'react';
import { useSelector } from 'react-redux';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import OpenMenu from '@/shared/assets/icons/sidebar/menu.svg';
import CloseMenu from '@/shared/assets/icons/sidebar/xmark.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui';
import { VStack } from '@/shared/ui/Stack';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cl from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };
    return (
        <aside
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
            <VStack role={'navigation'} gap="16" className={cl.items}>
                {sidebarItemsList.map(item => (
                    <SidebarItem item={item} key={item.path} collapsed={collapsed}/>
                ))}
            </VStack>
            <div className={cl.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} className={cl.lang}/>
            </div>
        </aside>
    );
});