import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui';

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
            <p>{t('Возникла непредвиденная ошибка')}</p>
            <Button 
                onClick={reloadPage} 
                theme={ThemeButton.BACKGROUND_INVERTED}
            >
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};