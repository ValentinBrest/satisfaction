import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui';

import cl from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({className}: PageLoaderProps) => {
    return (
        <div className={classNames(cl.PageLoader, {}, [className])}>
            <Loader/>
        </div>
    );
};