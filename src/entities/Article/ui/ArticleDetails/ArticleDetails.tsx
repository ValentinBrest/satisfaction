import { useTranslation } from 'react-i18next';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import cl from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = (props: ArticleDetailsProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div
                className={classNames(cl.ArticleDetails, {}, [className])}
            ></div>
        </DynamicModuleLoader>
    );
};
