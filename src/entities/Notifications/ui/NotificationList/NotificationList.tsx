import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';

import { useNotificationList } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { data, isLoading } = useNotificationList(null, {
        pollingInterval: 3000,
    });
    
    if (isLoading) {
        return (
            <VStack
                gap="8"
                max
                className={classNames('', {}, [className])}
            >
                <Skeleton width="100%" border="8px" height="80px"/>
                <Skeleton width="100%" border="8px" height="80px"/>
            </VStack>
        );
    }

    return (
        <VStack
            gap={'16'}
            max
            className={classNames('', {}, [className])}
        >
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
