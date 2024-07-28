import {
    memo,
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';
import { getUserAuthData, isAdmin, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    AppLink,
    AppLinkTheme,
    Avatar,
    Button,
    ButtonTheme,
    Text,
    TextTheme,
} from 'shared/ui';
import { Popover } from 'shared/ui/Popups';
import { Menu } from 'shared/ui/Popups/ui/Menu/Menu';
import { HStack } from 'shared/ui/Stack';

import cl from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = memo(({ className }: NavBarProps) => {
    const { t } = useTranslation('main');
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const isAdminUser = useSelector(isAdmin);

    const [isAuthModal, setIsAuthModal] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsMounted(true);
        timeRef.current = setTimeout(() => {
            setIsAuthModal(true);
        }, 100);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    useEffect(() => {
        return () => {
            clearInterval(timeRef.current);
        };
    }, []);

    return (
        <header className={classNames(cl.NavBar, {}, [className])}>
            <Text
                theme={TextTheme.INVERTED}
                title={'Valk'}
                className={cl.appName}
            />
            {authData && (
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePath.article_create}
                    className={cl.new}
                >
                    {t('sozdat-statyu')}
                </AppLink>
            )}
            <HStack max gap="8" justify="end">
                {
                    <Popover
                        trigger={
                            <Button theme={ButtonTheme.CLEAR}>
                                <NotificationIcon className={cl.icon} />
                            </Button>
                        }
                    >{t('sozdat-statyu')}</Popover>
                }
                {authData ? (
                    <Menu
                        items={[
                            ...(isAdminUser
                                ? [
                                    {
                                        content: t('Админка'),
                                        href: RoutePath.admin_panel,
                                    },
                                ]
                                : []),
                            {
                                content: t('profil'),
                                href: RoutePath.profile + authData.id,
                            },
                            {
                                content: t('vyiti'),
                                onCLick: onLogout,
                            },
                        ]}
                        trigger={
                            <Avatar
                                size={30}
                                src={authData.avatar}
                                alt="avatar"
                            />
                        }
                    />
                ) : (
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        onClick={onShowModal}
                    >
                        {t('voiti')}
                    </Button>
                )}
            </HStack>

            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
                isMounted={isMounted}
            />
        </header>
    );
});
