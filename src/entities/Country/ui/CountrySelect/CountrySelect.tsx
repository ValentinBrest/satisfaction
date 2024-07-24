import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui';
import { Listbox } from 'shared/ui/Listbox/Listbox';

import { Country } from '../../model/consts/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Poland, content: Country.Poland },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    return (
        <Listbox
            className={classNames('', {}, [className])}
            label={t('ukazhite-stranu')}
            items={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
