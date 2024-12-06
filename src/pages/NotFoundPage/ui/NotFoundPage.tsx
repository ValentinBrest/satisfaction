import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

import cl from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <Page data-testid="NotFoundPage" className={classNames(cl.NotFoundPage, {}, [className])}>
            {t('stranica-ne-naidena')}
        </Page>
    );
});

export default NotFoundPage;