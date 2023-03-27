import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { Profile,ProfileSchema } from './model/types/profile';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export {
    fetchProfileData,
    Profile,
    profileActions,
    ProfileCard,
    profileReducer,
    ProfileSchema,

    getProfileData,
    getProfileError,
    getProfileIsLoading,
};