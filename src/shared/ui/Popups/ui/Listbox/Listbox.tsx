import { ReactNode } from 'react';
import {
    Listbox as HListbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import IconDown from '../../../../assets/icons/down.svg';
import { Button } from '../../../Button/Button';
import { Icon } from '../../../Icon';
import { HStack } from '../../../Stack';

import cl from '../../styles/popup.module.scss';

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
        direction = 'bottomRight',
    } = props;

    const optionsClasses = [cl[direction]];

    return (
        <HStack gap="4">
            {label && <span style={{width: '98px'}}>{label}</span>}
            <HListbox
                disabled={readonly}
                as={'div'}
                className={classNames(cl.Popup, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <ListboxButton className={cl.trigger}>
                    <Button disabled={readonly} className={cl.btn}>
                        {defaultValue ?? value}
                        <Icon Svg={IconDown} className={cl.iconDown}/>
                    </Button>
                </ListboxButton>
                <ListboxOptions
                    className={classNames(cl.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <ListboxOption
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                        >
                            {({ focus, selected }) => (
                                <li
                                    className={classNames(
                                        cl.item,
                                        {
                                            [cl.active]: focus,
                                            [cl.selected]: selected,
                                            [cl.disabled]: item.disabled,
                                        },
                                        [],
                                    )}
                                >
                                    {item.content}
                                </li>
                            )}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </HListbox>
        </HStack>
    );
}
