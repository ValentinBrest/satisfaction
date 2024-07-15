import { Fragment, ReactNode } from 'react';
import { Menu as HMenu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';

import { AppLink } from '../AppLink/AppLink';
import { Button } from '../Button/Button';

import cl from './Menu.module.scss';

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
        <HMenu as={'div'} className={classNames(cl.Menu, {}, [className])}>
            <HMenu.Button className={cl.btn}>
                <Button>{trigger}</Button>
            </HMenu.Button>
            <HMenu.Items className={classNames(cl.menuItems, {}, menuClasses)}>
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
                            <HMenu.Item
                                as={AppLink}
                                key={item.href}
                                to={item.href}
                            >
                                {content}
                            </HMenu.Item>
                        );
                    }
                    return (
                        <HMenu.Item as={Fragment} key={item.href}>
                            {content}
                        </HMenu.Item>
                    );
                })}
            </HMenu.Items>
        </HMenu>
    );
}
