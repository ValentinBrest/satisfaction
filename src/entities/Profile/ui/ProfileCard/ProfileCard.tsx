import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, Input, Text } from 'shared/ui';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';

import cl from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({className}: ProfileCardProps) => {
    const {t} = useTranslation('profile');
    
    const profile = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cl.ProfileCard, {}, [className])}>
            <div className={cl.header}>
                <Text title={t('profile')}/>
                
            </div>
            <div className={cl.body}>
                <Input placeholder={profile?.first}/>
                <Input placeholder={profile?.lastname}/>
            </div>
            <div className={cl.footer}>
                <Button>{t('redaktirovat')}</Button>
            </div>
            
        </div>
    );
};