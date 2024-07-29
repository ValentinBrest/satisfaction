import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { useNotificationList } from '../api/notificationApi';

import cl from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {data, isLoading} = useNotificationList(null);

    return (
        <div className={classNames(cl.NotificationList, {}, [className])}></div>
    );
});
