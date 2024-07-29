import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import cl from './NotificationItem.module.scss';

interface NotificationItemProps {
   className?: string;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cl.NotificationItem, {}, [className])}>

        </div>
    );
});