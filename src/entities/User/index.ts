import { UserRole } from './model/consts/userConst';
import { getRoles, isAdmin, isGuest, isUser } from './model/selectors/getRoles/getRoles';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import { userActions, userReducer } from './model/slice/userSlice';
import { User, UserSchema } from './model/types/user';

export {
    getUserAuthData,
    getUserInited,
    userActions,
    userReducer,
    isAdmin,
    isUser,
    isGuest,
    getRoles,
    UserRole,
};

export type{
    User,
    UserSchema,
};
export { useJsonSettings } from './model/selectors/jsonSettings';
export { saveJsonSettings } from './model/services/saveJsonSettings';
export { initAuthData } from './model/services/initAuthData';