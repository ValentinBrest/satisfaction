
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input, Loader, Text, TextAlign, TextTheme } from 'shared/ui';

import { Profile } from '../../model/types/profile';

import cl from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    profile?: Profile;
    isLoading?: boolean;
    error?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className, 
        profile, 
        isLoading, 
        error,
    } = props;
    const {t} = useTranslation('profile');

    if(isLoading) {
        return (
            <div className={classNames(cl.ProfileCard, {}, [className, cl.loading])}>
                <Loader/>
            </div>
        );
    }

    if(error) {
        return (
            <div className={classNames(cl.ProfileCard, {}, [className, cl.error])}>
                <Text 
                    theme={TextTheme.ERROR}
                    title={t('proizloshla-oshibka-pri-zagruzke-profilya')}
                    text={t('poprobuite-obnovit-stranicu')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cl.ProfileCard, {}, [className])}>
            
            <div className={cl.body}>
                <Input placeholder={profile?.first}/>
                <Input placeholder={profile?.lastname}/>
            </div>
        </div>
    );
};