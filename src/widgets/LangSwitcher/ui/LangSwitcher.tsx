import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui';


interface LangSwitcherProps {
    className?: string;
    short?: boolean
}

export const LangSwitcher = memo(({className, short}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLng = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru': 'en');
    };

    return (
        <Button 
            className={classNames('', {}, [className])} 
            theme={ButtonTheme.BACKGROUND_INVERTED} 
            onClick={toggleLng}
        >
            {t(short ? 'korotkii-yazyk':'yazyk')}
        </Button>
    );
});