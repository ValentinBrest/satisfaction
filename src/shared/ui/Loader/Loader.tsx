import { classNames } from '@/shared/lib/classNames/classNames';

import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({className}: LoaderProps) => {
    const EmptyDivs = new Array(8).fill('');
    return (
        <div className={classNames('lds-roller', {}, [className])}>
            {EmptyDivs.map((_, index) => <div key={index}></div>)}
        </div>
    );
};