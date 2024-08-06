import { Fragment, ReactNode } from 'react';
import {
    Menu as HMenu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import { AppLink } from '../../../AppLink/AppLink';
import { Button, ButtonTheme } from '../../../Button/Button';

import cl from '../../styles/popup.module.scss';

export interface MenuItem {
    disabled?: boolean;
    content?: ReactNode;
    onCLick?: () => void;
    href?: string;
}

interface MenuProps {
    className?: string;
    items: MenuItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

export function Menu(props: MenuProps) {
    const { className, items, trigger, direction = 'bottomLeft' } = props;

    const menuClasses = [cl[direction]];

    return (
        <HMenu as={'div'} className={classNames(cl.Popup, {}, [className])}>
            <MenuButton className={cl.trigger}>
                <Button theme={ButtonTheme.CLEAR}>{trigger}</Button>
            </MenuButton>
            <MenuItems className={classNames(cl.options, {}, menuClasses)}>
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onCLick}
                            className={classNames(cl.item, {
                                [cl.active]: active,
                            })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <MenuItem
                                as={AppLink}
                                key={item.href}
                                to={item.href}
                            >
                                {content}
                            </MenuItem>
                        );
                    }
                    return (
                        <MenuItem as={Fragment} key={item.href}>
                            {content}
                        </MenuItem>
                    );
                })}
            </MenuItems>
        </HMenu>
    );
}
