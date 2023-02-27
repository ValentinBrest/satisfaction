import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import EmailIcon from 'shared/assets/icons/auth/email.svg';
import PasswordIcon from 'shared/assets/icons/auth/password.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme, Input } from 'shared/ui';

import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';

import cl from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    isOpen?: boolean; 
}

export const LoginForm = memo(({className, isOpen}: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {username, password} = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    return (
        <div className={classNames(cl.LoginForm, {}, [className])}>
            <div className={cl.wrapInput}>
                <EmailIcon className={cl.icon}/>
                <Input 
                    className={cl.input} 
                    type="text" 
                    placeholder="Email" 
                    isOpen={isOpen} 
                    onChange={onChangeUsername}
                    value={username}
                />
            </div>
            <div className={cl.wrapInput}>
                <PasswordIcon className={cl.icon}/>
                <Input 
                    className={cl.input} 
                    type="password" 
                    placeholder="Password" 
                    onChange={onChangePassword}
                    value={password}
                />
            </div>
            
            <Button 
                theme={ButtonTheme.BACKGROUND_INVERTED} 
                className={cl.loginBtn}
            >
                {t('voiti')}
            </Button>
        </div>
    );
});