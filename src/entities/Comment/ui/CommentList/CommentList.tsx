import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui';

import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

import cl from './CommentList.module.scss';

interface CommentListProps {
   className?: string;
   comments?: Comment[];
   isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation('comments');

    return (
        <div className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map(comment => (
                    <CommentCard 
                        className={cl.comment} 
                        comment={comment} 
                        isLoading={isLoading}
                        key={comment.id}
                    />
                ))
                : <Text text={t('kommentarii-otsutstvuyut')} /> 
            }
        </div>
    );
});