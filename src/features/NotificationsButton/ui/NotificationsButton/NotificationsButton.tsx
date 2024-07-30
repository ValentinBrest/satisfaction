import { memo } from 'react';
import { NotificationList } from 'entities/Notifications';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui';
import { Popover } from 'shared/ui/Popups';

import cl from './NotificationsButton.module.scss';

interface NotificationsButtonProps {
    className?: string;
}

export const NotificationsButton = memo((props: NotificationsButtonProps) => {
    const { className } = props;

    return (
        <Popover
            className={classNames('', {}, [className])}
            trigger={
                <Button theme={ButtonTheme.CLEAR}>
                    <NotificationIcon className={cl.icon} />
                </Button>
            }
        >
            {<NotificationList className={cl.notifications} />}
        </Popover>
    );
});
