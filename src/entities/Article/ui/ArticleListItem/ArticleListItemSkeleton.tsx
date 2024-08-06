import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

import { ArticleView } from '../../model/consts/articleConsts';

import cl from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(({className, view}: ArticleListItemSkeletonProps) => {
    if (view === ArticleView.LIST) {

        return (
            <Card className={classNames(cl.card, {}, [className, cl[view]])}>
                <div className={cl.header}>
                    <Skeleton border="50%" height={30} width={30} className={cl.avatar}
                    />
                    <Skeleton width={150} height={16}/>
                    <Skeleton width={150} height={16} className={cl.date}/>
                </div>
                <Skeleton width={250} height={24} className={cl.title} />
                <Skeleton width={150} height={18} className={cl.types} />
                <Skeleton height={200} className={cl.img}/>
                <div className={cl.footer}>
                    <Skeleton width={100} height={36}/>
                </div>
            </Card>
        );
    }

    return (
        <Card className={classNames(cl.card, {}, [className, cl[view]])}>
            <div className={cl.imageWrap}>
                <Skeleton width={180} height={200} className={cl.img}/>
            </div>
            <div className={cl.infoWrap}>
                <Skeleton width={130} height={16} className={cl.types}/>
            </div>
            <Skeleton width={150} height={16} className={cl.title}/>
        </Card>
    );
});