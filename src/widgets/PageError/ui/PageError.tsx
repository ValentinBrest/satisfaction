import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme, Text } from '@/shared/ui';

import cl from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({className}: PageErrorProps) => {
    const {t} = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cl.PageError, {}, [className])}>
            <Text title={t('voznikla-nepredvidennaya-oshibka')}/>
            <Button 
                onClick={reloadPage} 
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                {t('obnovit-stranicu')}
            </Button>
        </div>
    );
};