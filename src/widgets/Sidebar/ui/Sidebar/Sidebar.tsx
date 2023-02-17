import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
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
                onClick={onToggle}
            >
                {t('Переключить')}
            </Button>
            <div className={cl.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cl.lang}/>
            </div>
        </div>
    );
};