import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader, Modal, Text} from '@/shared/ui';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

import cl from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { t } = useTranslation();

    const { 
        className, 
        isOpen, 
        onClose, 
    } = props;

    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Text title={t('avtorizaciya')} className={cl.title}/>
            <Suspense fallback={<Loader className={cl.loader}/>}>
                <LoginFormAsync isOpen={isOpen} onSuccess={onClose}/>
            </Suspense>
        </Modal>
    );
};
