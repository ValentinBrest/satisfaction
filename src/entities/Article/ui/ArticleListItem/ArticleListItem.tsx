import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import EyeIcon from '@/shared/assets/icons/article/eye.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, Avatar, Button, Card, Text, TextSize } from '@/shared/ui';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

import {
    ArticleBlockType,
    ArticleView,
} from '../../model/consts/articleConsts';
import { ArcticleTextBlock, Article } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import cl from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation('articles');
    const types = <Text text={article.type.join(', ')} className={cl.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cl.views} />
            <EyeIcon />
        </>
    );

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArcticleTextBlock;

        return (
            <Card className={classNames(cl.card, {}, [className, cl[view]])} data-testid="ArticleListItem">
                <div className={cl.header}>
                    <Avatar
                        size={30}
                        src={article?.user?.avatar}
                        alt={article?.user?.username}
                        className={cl.avatar}
                    />
                    <Text text={article?.user?.username} />
                    <Text text={article.createdAt} className={cl.date} />
                </div>
                <Text
                    title={article.title}
                    className={cl.title}
                    size={TextSize.L}
                />
                {types}
                <AppImage 
                    fallback={<Skeleton width="100%" height={250} />}
                    src={article.img} 
                    alt={article.title} 
                    className={cl.img} 
                />
                {textBlock && (
                    <ArticleTextBlockComponent
                        block={textBlock}
                        className={cl.textBlock}
                    />
                )}
                <div className={cl.footer}>
                    <AppLink
                        to={getRouteArticleDetails(article.id)}
                        target={target}
                    >
                        <Button>{t('chitat-dalee')}</Button>
                        {views}
                    </AppLink>
                </div>
            </Card>
        );
    }

    return (
        <AppLink to={getRouteArticleDetails(article.id)} target={target} data-testid={'ArticleListItem'}>
            <Card className={classNames(cl.card, {}, [className, cl[view]])}>
                <div className={cl.imageWrap}>
                    <AppImage
                        fallback={<Skeleton width={'100%'} height={200} />}
                        src={article.img}
                        alt={article.title}
                        className={cl.img}
                    />
                    <Text text={article.createdAt} className={cl.date} />
                </div>
                <div className={cl.infoWrap}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cl.title} />
            </Card>
        </AppLink>
    );
});
