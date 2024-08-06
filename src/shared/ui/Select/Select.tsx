import { ChangeEvent, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cl from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface selectProps<T extends string> {
    className?: string;
    label?: string; 
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: selectProps<T>) => {
    const {
        className, 
        label, 
        options, 
        value, 
        onChange,
        readonly,
    }= props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const optionsList = useMemo(() => options?.map(item => (
        <option 
            className={cl.option} 
            value={item.value}
            key={item.value}
        >
            {item.content}
        </option>),
    ), [options]);

    return (
        <div className={classNames(cl.wrapper, {}, [className])}>
            {label && (
                <span className={cl.label}>{label}</span>
            )}
            <select 
                className={cl.select} 
                disabled={readonly} 
                value={value} 
                onChange={onChangeHandler}
            >
                {optionsList }
                
            </select>
        </div>
    );
};