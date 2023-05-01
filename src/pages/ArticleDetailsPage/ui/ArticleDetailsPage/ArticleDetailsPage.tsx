import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import cl from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('articles');

    return <div className={classNames(cl.ArticleDetailsPage, {}, [className])}>
        <div>{t('article')}</div>
    </div>;
};


export default memo(ArticleDetailsPage);
