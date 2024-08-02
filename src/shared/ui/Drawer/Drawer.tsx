import { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal/useModal';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import cl from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
    } = props;
    const { theme } = useTheme();

    const {close} = useModal({
        animationDelay: 100,
        isOpen,
        onClose,
    });

    const mods: Mods = {
        [cl.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(cl.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div
                    className={cl.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
});
