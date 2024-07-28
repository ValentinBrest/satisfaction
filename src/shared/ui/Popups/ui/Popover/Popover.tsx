import { memo, ReactNode } from 'react';
import { Popover as HPopover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';

import clP from '../../styles/popup.module.scss';
import cl from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export const Popover = memo((props: PopoverProps) => {
    const { className, trigger, direction = 'bottomLeft', children } = props;
    const menuClasses = [clP[direction]];

    return (
        <HPopover className={classNames(clP.Popup, {}, [className])}>
            <PopoverButton className={clP.trigger}>{trigger}</PopoverButton>
            <PopoverPanel className={classNames(cl.panel, {}, menuClasses)}>
                {children}
            </PopoverPanel>
        </HPopover>
    );
});
