import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar, Text } from 'shared/ui';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

import { Comment } from '../../model/types/comment';

import cl from './CommentCard.module.scss';

interface CommentCardProps {
   className?: string;
   comment: Comment;
   isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cl.CommentCard, {}, [className])}>
                <Skeleton className={cl.avatar} width={40} height={40} border="50%"/>
                <div className={cl.textWrap}>
                    <Skeleton className={cl.username} width={100} height={32} />
                    <Skeleton width={'100%'} height={50} />
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(cl.CommentCard, {}, [className])}>
            <Avatar 
                src={ comment.user.avatar || 'https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg'} 
                size={40} 
                alt="avatar"/>
            <div className={cl.textWrap}>
                <Text className={cl.username} title={comment.user.username}/>
                <Text className={cl.text} text={comment.text}/>
            </div>
            
        </div>
    );
});