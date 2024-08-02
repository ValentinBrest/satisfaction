import React, { ReactNode, useCallback, useEffect } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

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

    const mods: Mods = {
        [cl.opened]: isOpen,
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cl.Modal, mods, [className])}>
                <Overlay onClick={closeHandler} />
                <div className={cl.content}>
                    <Button
                        onClick={closeHandler}
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
