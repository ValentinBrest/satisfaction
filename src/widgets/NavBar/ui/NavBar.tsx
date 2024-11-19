import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getUserAuthData, isAdmin, userActions } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { NotificationsButton } from '@/features/NotificationsButton';
import { getRouteAdmin, getRouteArticleCreate, getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    AppLink,
    AppLinkTheme,
    Avatar,
    Button,
    ButtonTheme,
    Text,
    TextTheme,
} from '@/shared/ui';
import { Menu } from '@/shared/ui/Popups';
import { HStack } from '@/shared/ui/Stack';

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

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

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
                    to={getRouteArticleCreate()}
                    className={cl.new}
                >
                    {t('sozdat-statyu')}
                </AppLink>
            )}
            <HStack max gap="8" justify="end">
                {authData ? (
                    <>
                        <NotificationsButton />
                        <Menu
                            items={[
                                ...(isAdminUser
                                    ? [
                                        {
                                            content: t('Админка'),
                                            href: getRouteAdmin(),
                                        },
                                    ]
                                    : []),
                                {
                                    content: t('profil'),
                                    href: getRouteProfile(authData.id),
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
                    </>
                ) : (
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        onClick={onShowModal}
                    >
                        {t('voiti')}
                    </Button>
                )}
            </HStack>

            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </header>
    );
});
