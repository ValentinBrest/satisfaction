export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    GUEST = 'GUEST'
}

export interface User {
    id: string;
    username: string;
    avatar?: string;
    role?: UserRole[];
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}