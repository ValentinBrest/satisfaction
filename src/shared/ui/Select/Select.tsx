import { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cl from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface selectProps {
    className?: string;
    label?: string; 
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: selectProps) => {
    const {
        className, 
        label, 
        options, 
        value, 
        onChange,
        readonly,
    }= props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
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
});