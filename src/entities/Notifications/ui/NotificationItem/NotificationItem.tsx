import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, Text, TextSize } from '@/shared/ui';
import { CardTheme } from '@/shared/ui/Card/Card';

import type { Notification } from '../../types/notification';

import cl from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <Card
            className={classNames(cl.NotificationItem, {}, [className])}
            theme={CardTheme.OUTLINED}
        >
            <Text
                title={item.title}
                text={item.description}
                size={TextSize.M}
            />
        </Card>
    );

    if (item.href) {
        return (
            <a style={{display: 'block', width: '100%'}} href={item.href} target="_blank" rel="noreferrer">{content}</a>
        );
    }

    return content;
});
