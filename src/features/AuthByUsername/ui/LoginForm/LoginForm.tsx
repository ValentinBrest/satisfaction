import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui';

import cl from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({className}: LoginFormProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cl.LoginForm, {}, [className])}>
            <input className={cl.input} type="text"/>
            <input className={cl.input} type="text"/>
            <Button 
                theme={ButtonTheme.BACKGROUND_INVERTED} 
                className={cl.loginBtn}
            >
                {t('voiti')}
            </Button>
        </div>
    );
};