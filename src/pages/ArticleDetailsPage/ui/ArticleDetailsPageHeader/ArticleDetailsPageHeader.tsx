import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';
import { getArticleDetailsData } from 'entities/Article';
import BackIcon from 'shared/assets/icons/back.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui';
import { HStack } from 'shared/ui/Stack';

import { getCanEditArticle } from '../../model/selectors/article';

import cl from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const navigate = useNavigate();
        const canEdit = useSelector(getCanEditArticle);
        const article = useSelector(getArticleDetailsData);

        const onBackToList = useCallback(() => {
            navigate(RoutePath.articles);
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            navigate(`${RoutePath.articles}/${article?.id}/edit`);
        }, [navigate, article?.id]);

        return (
            <HStack
                justify="between"
                max
                className={classNames('', {}, [className])}
            >
                <Button
                    onClick={onBackToList}
                    theme={ButtonTheme.CLEAR}
                    className={cl.icon}
                >
                    <BackIcon />
                </Button>

                {canEdit && (
                    <Button
                        onClick={onEditArticle}
                        theme={ButtonTheme.CLEAR}
                        className={cl.edit}
                    >
                        <EditIcon />
                    </Button>
                )}
            </HStack>
        );
    },
);
