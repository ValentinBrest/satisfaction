import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cl from './Page.module.scss';

interface PageProps {
   className?: string;
   children: ReactNode;
}

export const Page = memo((props: PageProps) => {
    const { className, children } = props;

    return (
        <section className={classNames(cl.Page, {}, [className])}>
            {children}
        </section>
    );
});