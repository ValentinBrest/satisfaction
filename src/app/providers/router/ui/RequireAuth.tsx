import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getRoles, getUserAuthData, UserRole } from '@/entities/User';
import { getRouteForbidden, getRouteMain } from '@/shared/const/router';


type RequireAuthType = {
    children: JSX.Element;
    roles?: UserRole[];
};

export function RequireAuth({ children, roles }: RequireAuthType) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getRoles);
    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => {
            return userRoles?.includes(requiredRole);
        });
    }, [roles, userRoles]);

    if (!auth) {
        return (
            <Navigate to={getRouteMain()} state={{ from: location }} replace />
        );
    }

    if (!hasRequiredRoles) {
        return (
            <Navigate to={getRouteForbidden()} state={{ from: location }} replace />
        );
    }

    return children;
}
