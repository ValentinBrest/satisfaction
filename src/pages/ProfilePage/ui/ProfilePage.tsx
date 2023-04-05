import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import {
    fetchProfileData, getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = memo(() => {
    const dispatch = useAppDispatch();
    const formProfile = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);

    useEffect (() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({first: value || ''}));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({lastname: value || ''}));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({city: value || ''}));
    }, [dispatch]);

    const onChangeAge= useCallback((value?: string) => {
        const validateValue = value?.replace(/\D+/gm, '');
        dispatch(profileActions.updateProfile({age: Number(validateValue || 0)}));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({username: value || ''}));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({currency}));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfilePageHeader/>
            <ProfileCard 
                profile={formProfile} 
                isLoading={isLoading} 
                error={error}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeCity={onChangeCity}
                onChangeAge={onChangeAge}
                onChangeUsername={onChangeUsername}
                onChangeCurrency={onChangeCurrency}
                readonly={readonly}
            />
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
