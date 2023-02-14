import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui';

import cl from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLng = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru': 'en');
    };

    return (
        <Button 
            className={classNames(cl.LangSwitcher, {}, [className])} 
            theme={ThemeButton.CLEAR} 
            onClick={toggleLng}
        >
            {t('Язык')}
        </Button>
    );
};