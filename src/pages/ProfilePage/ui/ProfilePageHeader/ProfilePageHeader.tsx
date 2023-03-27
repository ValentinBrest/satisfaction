import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, Text } from 'shared/ui';

import cl from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({className}: ProfilePageHeaderProps) => {
    const {t} = useTranslation('profile');
    return (
        <div className={classNames(cl.ProfilePageHeader, {}, [className])}>
            <Text title={t('profile')}/>
            <Button>{t('redaktirovat')}</Button>
        </div>
    );
};