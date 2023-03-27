import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { 
    fetchProfileData, 
    getProfileData, 
    getProfileError, 
    getProfileIsLoading, 
    ProfileCard, 
    profileReducer,
} from 'entities/Profile';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = memo(() => {
    const dispatch = useAppDispatch();
    const profile = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    useEffect (() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfileCard 
                profile={profile} 
                isLoading={isLoading} 
                error={error}
            />
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
