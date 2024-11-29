import { memo, useState } from 'react';
import { useSelector } from 'react-redux';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import OpenMenu from '@/shared/assets/icons/sidebar/menu.svg';
import CloseMenu from '@/shared/assets/icons/sidebar/xmark.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme, Text,TextTheme } from '@/shared/ui';
import { Icon } from '@/shared/ui/Icon';
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
            <Text
                theme={TextTheme.INVERTED}
                title={'VALK'}
                className={cl.appName}
            />
            <Button 
                data-testid="sidebar-toggle" 
                theme={ButtonTheme.CLEAR}
                onClick={onToggle}
                square
                size={ButtonSize.M}
            >
                {<Icon inverted Svg={collapsed ? OpenMenu: CloseMenu} width={20} height={20}/>}
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