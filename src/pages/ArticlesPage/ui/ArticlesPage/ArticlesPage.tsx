import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import cl from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('articles');

    return <div className={classNames(cl.ArticlesPage, {}, [className])}>
        <div>{t('articles')}</div>
    </div>;
};


export default memo(ArticlesPage);
