import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme,Modal } from 'shared/ui';

import cl from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({className}: NavBarProps) => {
    const {t} = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback( () => {
        setIsAuthModal(prev => !prev);
    }, []);

    return (
        <div className={classNames(cl.NavBar, {}, [className])}>
            
            <div className={cl.links}>
                
                <Button 
                    theme={ButtonTheme.CLEAR_INVERTED} 
                    onClick={onToggleModal}
                >
                    {t('voiti')}
                </Button>
                    
                <Modal 
                    isOpen={isAuthModal} 
                    onClose={onToggleModal}
                >
                    Авторизация
                </Modal>
            </div>
            
        </div>
    );
};