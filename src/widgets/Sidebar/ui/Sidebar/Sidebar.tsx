import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
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
        <div className={classNames(cl.Sidebar, {[cl.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>{t('Переключить')}</button>
            <div className={cl.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cl.lang}/>
            </div>
        </div>
    );
};