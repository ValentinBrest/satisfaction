import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchProfileData, profileReducer } from 'entities/Profile';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = memo(() => {
    const dispatch = useAppDispatch();

    useEffect (() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const {t} = useTranslation('profile');
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>{t('profilePage')}</div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
