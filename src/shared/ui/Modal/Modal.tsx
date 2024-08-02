import { ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal/useModal';

import CloseIcon from '../../assets/icons/sidebar/xmark.svg';
import { Button, ButtonSize, ButtonTheme } from '../Button/Button';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import cl from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    isMounted: boolean;
}

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy, isMounted } = props;

    const {close} = useModal({
        animationDelay: 100,
        isOpen,
        onClose,
    });

    const mods: Mods = {
        [cl.opened]: isOpen,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cl.Modal, mods, [className])}>
                <Overlay onClick={close} />
                <div className={cl.content}>
                    <Button
                        onClick={close}
                        square
                        size={ButtonSize.M}
                        theme={ButtonTheme.CLEAR}
                        className={cl.close}
                    >
                        <CloseIcon className={cl.icon} />
                    </Button>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
