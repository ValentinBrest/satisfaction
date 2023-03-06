import { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cl from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    isOpen?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        isOpen,
        ...otherProps
    } = props;

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
        <input
            ref={refInput}
            className={classNames(cl.Input, {}, [className])}
            type={type}
            value={value}
            onChange={onChangeHandler}
            {...otherProps}
        />
    );
});
