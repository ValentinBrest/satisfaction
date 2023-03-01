import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import EmailIcon from 'shared/assets/icons/auth/email.svg';
import PasswordIcon from 'shared/assets/icons/auth/password.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme, Input, Loader, Text, TextTheme } from 'shared/ui';

import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
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
    const store = useStore() as ReduxStoreWithManager;
    const {username, password, isLoading, error} = useSelector(getLoginState);

    useEffect (() => {
        store.reducerManager.add('loginForm', loginReducer);

        return () => {
            store.reducerManager.remove('loginForm');
        };
        //eslint-disable-next-line
    }, []);


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
    );
});

export default LoginForm;