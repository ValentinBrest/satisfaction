import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { Profile,ProfileSchema } from './model/types/profile';

export {
    fetchProfileData,
    Profile,
    profileActions, 
    profileReducer,
    ProfileSchema,
};