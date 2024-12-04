import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';

export default (isAdminUser: boolean, authDataId: string, onLogout: () => void) => ([
    {
        content: 'adminPanel',
        href: getRouteAdmin(),
        security: isAdminUser,
    },
    {
        content: 'profile',
        href: getRouteProfile(authDataId),
    },
    {
        content: 'logout',
        onCLick: onLogout,
    },
]);