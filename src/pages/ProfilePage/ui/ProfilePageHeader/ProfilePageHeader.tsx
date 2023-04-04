import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme, Text } from 'shared/ui';

import cl from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({className}: ProfilePageHeaderProps) => {
    const {t} = useTranslation('profile');

    const readonly = useSelector(getProfileReadonly);

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
        <div className={classNames(cl.ProfilePageHeader, {}, [className])}>
            <Text title={t('profile')}/>
            {readonly 
                ? (
                    <Button onClick={onEdit}>{t('redaktirovat')}</Button>
                )
                : (
                    <div>
                        <Button onClick={onSave}>{t('sokhranit')}</Button>
                        <Button 
                            className={cl.cancelBtn} 
                            onClick={onCancelEdit} 
                            theme={ButtonTheme.OUTLINE_RED}
                        >
                            {t('otmenit')}
                        </Button>
                    </div>
                )
            }
        </div>
    );
};