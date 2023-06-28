import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';
import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import EyeIcon from 'shared/assets/icons/article/eye.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar, Button, Card, Text, TextSize } from 'shared/ui';

import { ArcticleTextBlock, Article, ArticleBlockType, ArticleView } from '../../model/types/article';

import cl from './ArticleListItem.module.scss';

interface ArticleListItemProps {
   className?: string;
   article: Article;
   view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view} = props;
    const { t } = useTranslation('articles');
    const types = <Text text={article.type.join(', ')} className={cl.types}/>;
    const views = (
        <>
            <Text text={String(article.views)} className={cl.views}/>
            <EyeIcon/>
        </>
    );
    const navigate = useNavigate();
    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.articles_details + article.id);
    }, [article.id, navigate]);

    if (view === ArticleView.LIST) {

        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArcticleTextBlock;

        return (
            <Card className={classNames(cl.card, {}, [className, cl[view]])}>
                <div className={cl.header}>
                    <Avatar 
                        size={30} 
                        src={article.user.avatar} 
                        alt={article.user.username}
                        className={cl.avatar}
                    />
                    <Text text={article.user.username}/>
                    <Text text={article.createdAt} className={cl.date}/>
                </div>
                <Text title={article.title} className={cl.title} size={TextSize.L}/>
                {types}
                <img src={article.img} alt={article.title} className={cl.img}/>
                {textBlock && (
                    <ArticleTextBlockComponent block={textBlock} className={cl.textBlock}/>
                )}
                <div className={cl.footer} onClick={onOpenArticle}>
                    <Button>{t('chitat-dalee')}</Button>
                    {views}
                </div>
            </Card>
        );
    }

    return (
        <Card onClick={onOpenArticle} className={classNames(cl.card, {}, [className, cl[view]])}>
            <div className={cl.imageWrap}>
                <img src={article.img} alt={article.title} className={cl.img}/>
                <Text text={article.createdAt} className={cl.date}/>
            </div>
            <div className={cl.infoWrap}>
                {types}
                {views}
            </div>
            <Text text={article.title} className={cl.title}/>
        </Card>
    );
});