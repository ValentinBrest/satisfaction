import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import cl from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
}

export const ArticleDetails = (props: ArticleDetailsProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cl.ArticleDetails, {}, [className])}></div>
    );
};
