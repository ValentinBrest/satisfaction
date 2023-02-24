import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui';

import cl from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({className}: NavBarProps) => {
    const {t} = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback( () => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback( () => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cl.NavBar, {}, [className])}>
            
            <div className={cl.links}>
                
                <Button 
                    theme={ButtonTheme.CLEAR_INVERTED} 
                    onClick={onShowModal}
                >
                    {t('voiti')}
                </Button>
                    
                <LoginModal 
                    isOpen={isAuthModal} 
                    onClose={onCloseModal}
                />
            </div>
            
        </div>
    );
};