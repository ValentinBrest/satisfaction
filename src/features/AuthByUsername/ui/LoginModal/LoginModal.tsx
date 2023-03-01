import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader, Modal, Text} from 'shared/ui';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

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
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            isMounted={isMounted}
            lazy
        >
            <Text title={t('avtorizaciya')} className={cl.title}/>
            <Suspense fallback={<Loader className={cl.loader}/>}>
                <LoginFormAsync isOpen={isOpen} />
            </Suspense>
        </Modal>
    );
};
