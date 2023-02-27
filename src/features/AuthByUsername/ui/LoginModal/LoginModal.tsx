import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal, Text} from 'shared/ui';

import { LoginForm } from '../LoginForm/LoginForm';

import cl from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    isMounted: boolean;
}

export const LoginModal = (props: LoginModalProps) => {
    const { t } = useTranslation();

    const { 
        className, 
        isOpen, 
        onClose, 
        isMounted,
    } = props;

    return (
        <Modal
            className={classNames(cl.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            isMounted={isMounted}
            lazy
        >
            <Text title={t('avtorizaciya')} className={cl.title}/>
            <LoginForm isOpen={isOpen} />
        </Modal>
    );
};
