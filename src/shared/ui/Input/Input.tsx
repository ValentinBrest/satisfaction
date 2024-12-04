import { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import { HStack } from '../Stack';

import cl from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readonly'
>;

export interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    isOpen?: boolean;
    readonly?: boolean;
    label?: string;
    dictTr?: string;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        isOpen,
        readonly,
        label,
        dictTr,
        ...otherProps
    } = props;

    const { t } = useTranslation(dictTr);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const refInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            refInput.current?.focus();
        }
    }, [isOpen]);

    return (
        <HStack max>
            {label && <label className={cl.label}>{t(label)}:</label>}
            <input
                ref={refInput}
                className={classNames(cl.Input, {}, [className])}
                type={type}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
                {...otherProps}
            />
        </HStack>
    );
});
