import { memo } from 'react';

import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, Avatar, Text } from '@/shared/ui';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';

import { Comment } from '../../model/types/comment';

import cl from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(cl.CommentCard, {}, [
                    className,
                    cl.loading,
                ])}
            >
                <div className={cl.wrap}>
                    <Skeleton
                        className={cl.avatar}
                        width={40}
                        height={40}
                        border="50%"
                    />
                    <Skeleton className={cl.username} width={100} height={32} />
                </div>
                <Skeleton width={'100%'} height={50} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack
            gap="8"
            max
            className={classNames(cl.CommentCard, {}, [className])}
        >
            <div className={cl.wrap}>
                <AppLink to={getRouteProfile(comment.user.id)}>
                    <Avatar
                        src={
                            comment.user.avatar ||
                            'https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg'
                        }
                        size={40}
                        alt="avatar"
                    />
                </AppLink>
                <AppLink
                    className={cl.username}
                    to={getRouteProfile(comment.user.id)}
                >
                    <Text title={comment.user.username} />
                </AppLink>
            </div>

            <Text className={cl.comment} text={comment.text} />
        </VStack>
    );
});
