import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';

import cl from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={classNames(cl.ArticleDetailsPage, {}, [className])}>
                {t('statya-ne-naidena')}
            </div>
        );
    }

    return <div className={classNames(cl.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id}/>
    </div>;
};


export default memo(ArticleDetailsPage);
