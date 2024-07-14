import { ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Button } from '../Button/Button';
import { HStack } from '../Stack';

import cl from './Listbox.module.scss';

type DropdownDirection = 'top' | 'bottom';

export interface ListboxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListboxProps {
    items?: ListboxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    label?: string;
    readonly?: boolean;
    direction?: DropdownDirection;
}

export function Listbox(props: ListboxProps) {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
        label,
        readonly = false,
        direction = 'bottom',
    } = props;

    const optionsClasses = [cl[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListbox
                disabled={readonly}
                as={'div'}
                className={classNames(cl.Listbox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListbox.Button className={cl.trigger}>
                    <Button disabled={readonly}>{defaultValue ?? value}</Button>
                </HListbox.Button>
                <HListbox.Options className={classNames(cl.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cl.item,
                                        {
                                            [cl.active]: active,
                                            [cl.selected]: selected,
                                            [cl.disabled]: item.disabled,
                                        },
                                        [],
                                    )}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
}
