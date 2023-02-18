import { classNames } from 'shared/lib/classNames/classNames';

import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({className}: LoaderProps) => {
    const EmptyDivs = new Array(8).fill(<div />);
    return (
        <div className={classNames('lds-roller', {}, [className])}>
            {...EmptyDivs}
        </div>
    );
};