import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui';

import { LoginForm } from '../LoginForm/LoginForm';

import cl from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;

}

export const LoginModal = (props: LoginModalProps) => {
    const {t} = useTranslation();

    const {
        className,
        isOpen,
        onClose,
    } = props;

    return (
        <Modal 
            className={classNames(cl.LoginModal, {}, [className])} 
            isOpen={isOpen} 
            onClose={onClose}
            lazy
        >
            <h3 className={cl.title}>{t('avtorizaciya')}</h3>
            <LoginForm/>
        </Modal>
    );
};