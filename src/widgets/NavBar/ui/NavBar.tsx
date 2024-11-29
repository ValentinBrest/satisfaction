import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getUserAuthData, isAdmin, userActions } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { NotificationsButton } from '@/features/NotificationsButton';
import { getRouteArticleCreate } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    AppLink,
    AppLinkTheme,
    Avatar,
    Button,
    ButtonTheme,
} from '@/shared/ui';
import { Menu } from '@/shared/ui/Popups';
import { VStack } from '@/shared/ui/Stack';

import menuConfig from './configMenu';

import cl from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = memo(({ className }: NavBarProps) => {
    const { t } = useTranslation();
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
            
            
            <VStack max gap="8" align="center">
                {authData ? (
                    <>
                        <Menu
                            items={menuConfig(isAdminUser, authData.id, onLogout)}
                            trigger={
                                <Avatar
                                    size={30}
                                    src={authData.avatar}
                                    alt="avatar"
                                    fallbackInverted={true}
                                />
                            }
                        />
                        <NotificationsButton />
                    </>
                ) : (
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        onClick={onShowModal}
                    >
                        {t('voiti')}
                    </Button>
                )}
            </VStack>
            {authData && (
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={getRouteArticleCreate()}
                    className={cl.new}
                >
                    {t('createArticle')}
                </AppLink>
            )}

            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </header>
    );
});
