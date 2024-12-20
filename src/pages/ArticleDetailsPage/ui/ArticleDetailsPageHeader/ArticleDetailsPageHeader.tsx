import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticleDetailsData } from '@/entities/Article';
import BackIcon from '@/shared/assets/icons/back.svg';
import EditIcon from '@/shared/assets/icons/edit.svg';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui';
import { Icon } from '@/shared/ui/Icon';
import { HStack } from '@/shared/ui/Stack';

import { getCanEditArticle } from '../../model/selectors/article';

import cl from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { className } = props;
        const navigate = useNavigate();
        const canEdit = useSelector(getCanEditArticle);
        const article = useSelector(getArticleDetailsData);

        const onBackToList = useCallback(() => {
            navigate(getRouteArticles());
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            if (article) {
                navigate(getRouteArticleEdit(article?.id));
            }
        }, [navigate, article]);

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
                    <Icon width={35} height={35} Svg={BackIcon} />
                </Button>

                {canEdit && (
                    <Button
                        onClick={onEditArticle}
                        theme={ButtonTheme.CLEAR}
                        className={cl.edit}
                    >
                        <Icon width={30} height={30} Svg={EditIcon} />
                    </Button>
                )}
            </HStack>
        );
    },
);
