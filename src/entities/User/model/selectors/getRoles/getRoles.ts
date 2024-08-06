import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

import { UserRole } from '../../consts/userConst';


export const getRoles = (state: StateSchema) => state.user.authData?.role;


export const isAdmin = createSelector(getRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
export const isUser = createSelector(getRoles, (roles) => Boolean(roles?.includes(UserRole.USER)));
export const isGuest = createSelector(getRoles, (roles) => Boolean(roles?.includes(UserRole.GUEST)));