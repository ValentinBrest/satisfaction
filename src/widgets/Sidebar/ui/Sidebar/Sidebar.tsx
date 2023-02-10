import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cl from './Sidebar.module.scss'

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(cl.Sidebar, {[cl.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>Toggle</button>
            <div className={cl.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    )
}