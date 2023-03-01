import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import EmailIcon from 'shared/assets/icons/auth/email.svg';
import PasswordIcon from 'shared/assets/icons/auth/password.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Button, ButtonTheme, Input, Loader, Text, TextTheme } from 'shared/ui';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import cl from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    isOpen?: boolean; 
}

const LoginForm = memo(({className, isOpen}: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick= useCallback(() => {
        dispatch(loginByUsername({username, password}));
    }, [dispatch, username, password]);

    return (
        <DynamicModuleLoader name="loginForm" reducer={loginReducer} removeAfterUnmount>
            <div className={classNames(cl.LoginForm, {}, [className])}>
                {error && <Text text={t('vy-vveli-nevernyi-login-ili-parol')} theme={TextTheme.ERROR}/>}
                {isLoading && <Loader className={cl.loader}/>}
                <div className={classNames(cl.wrapInput, {[cl.isLoad]: isLoading})}>
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
                <div className={classNames(cl.wrapInput, {[cl.isLoad]: isLoading})}>
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
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('voiti')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;