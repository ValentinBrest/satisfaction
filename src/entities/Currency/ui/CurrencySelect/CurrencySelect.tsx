import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui';

import { Currency } from '../../model/types/currency';


interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean; 
}

const options = [
    {value: Currency.RUB, content: Currency.RUB},
    {value: Currency.BYN, content: Currency.BYN},
    {value: Currency.EUR, content: Currency.EUR},
    {value: Currency.USD, content: Currency.USD},
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {className, value, onChange, readonly} = props;
    const {t} = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select 
            className={classNames('', {}, [className])}
            label={t('ukazhite-valyutu')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});