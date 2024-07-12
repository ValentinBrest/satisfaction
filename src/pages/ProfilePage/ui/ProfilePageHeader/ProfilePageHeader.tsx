import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme, Text } from 'shared/ui';
import { HStack } from 'shared/ui/Stack';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({className}: ProfilePageHeaderProps) => {
    const {t} = useTranslation('profile');

    const readonly = useSelector(getProfileReadonly);
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    
    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack justify={'between'} max>
            <Text title={t('profile')}/>
            {canEdit && (
                <div>
                    {readonly 
                        ? (
                            <Button onClick={onEdit}>{t('redaktirovat')}</Button>
                        )
                        : (
                            <HStack gap="8">
                                <Button onClick={onSave}>{t('sokhranit')}</Button>
                                <Button 
                                    onClick={onCancelEdit} 
                                    theme={ButtonTheme.OUTLINE_RED}
                                >
                                    {t('otmenit')}
                                </Button>
                            </HStack>
                        )
                    }
                </div>
            )}
        </HStack>
    );
};