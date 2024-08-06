import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types';
import { Select } from '@/shared/ui';
import { SelectOption } from '@/shared/ui/Select/Select';

import { ArticleSortField } from '../../model/consts/articleConsts';

import cl from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
   className?: string;
   sort: ArticleSortField;
   order: SortOrder;
   onChangeOrder: (newOrder: SortOrder) => void;
   onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, sort, order, onChangeOrder, onChangeSort } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('vozrastaniyu'),
        },
        {
            value: 'desc',
            content: t('ubyvaniyu'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('date-sozdaniya'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('naimenovaniyu'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('prosmotram'),
        },
    ], [t]);
  
    return (
        <div className={classNames(cl.ArticleSortSelector, {}, [className])}>
            <Select 
                label={t('sortirovat-po')} 
                value={sort} 
                options={sortFieldOptions}
                onChange={onChangeSort}
            />
            <Select 
                className={cl.order}
                label={t('po')} 
                value={order} 
                options={orderOptions} 
                onChange={onChangeOrder}
            />
        </div>
    );
});