import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { SidebarItemType } from 'widgets/Sidebar/model/items';

import cl from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({item, collapsed}: SidebarItemProps) => {
    const {t} = useTranslation();
    return (
        <AppLink 
            theme={AppLinkTheme.INVERTED} 
            to={item.path}
            className={classNames(cl.item, {[cl.collapsed]: collapsed})}
        >
            <item.Icon className={cl.icon}/>
            <span className={cl.link}>{t(item.text)}</span>
        </AppLink>
    );
});