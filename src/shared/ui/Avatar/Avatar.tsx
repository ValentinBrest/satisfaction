import { CSSProperties, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import UserIcon from '../../assets/icons/user-filled.svg';
import { AppImage } from '../../ui/AppImage';
import { Skeleton } from '../../ui/Skeleton';

import cl from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt: string;
    fallbackInverted?: boolean;
}

export const Avatar = ({
    className, 
    src, 
    size = 100, 
    alt, 
    fallbackInverted,
}: AvatarProps) => {

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size,
        };
    }, [size]);

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <UserIcon 
        className={classNames('', {[cl.inverted]: fallbackInverted}, [])} 
        width={size} 
        height={size} 
    />;

    return (
        <AppImage 
            fallback={fallback}
            errorFallback={errorFallback}
            src={src} 
            alt={alt}
            style={styles}
            className={classNames(cl.Avatar, {}, [className])}
        />
    );
};