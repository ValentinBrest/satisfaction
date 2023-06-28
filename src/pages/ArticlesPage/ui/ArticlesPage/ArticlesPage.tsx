import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { article } from 'entities/Article/mocks/data';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui';

import cl from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('articles');

    return <div className={classNames(cl.ArticlesPage, {}, [className])}>
        <Text title={t('articles')} size={TextSize.L} className={cl.title}/>
        <ArticleList articles={new Array(16)
            .fill(0)
            .map((item, index) => ({...article, id: String(index)}))}/>
    </div>;
};


export default memo(ArticlesPage);
