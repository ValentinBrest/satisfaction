
import { useTranslation } from 'react-i18next';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country } from 'shared/const/common';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar, Input, Loader, Text, TextAlign, TextTheme } from 'shared/ui';

import { Profile } from '../../model/types/profile';

import cl from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    profile?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className, 
        profile, 
        isLoading, 
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
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
                {profile?.avatar && <Avatar src={profile?.avatar} size={150} alt="usericon"/>}
                <div className={cl.inputWrap}>
                    <Input 
                        className={cl.profileInput}
                        placeholder={t('vashe-imya')}
                        value={profile?.first} 
                        onChange={onChangeFirstname} 
                        readonly={readonly}
                    />
                    <Input 
                        className={cl.profileInput}
                        placeholder={t('vasha-familiya')}
                        value={profile?.lastname} 
                        onChange={onChangeLastname} 
                        readonly={readonly}
                    />
                    <Input 
                        className={cl.profileInput}
                        placeholder={t('vash-vozrast')}
                        value={profile?.age} 
                        onChange={onChangeAge} 
                        readonly={readonly}
                    />
                    <Input 
                        className={cl.profileInput}
                        placeholder={t('vash-gorod')}
                        value={profile?.city} 
                        onChange={onChangeCity} 
                        readonly={readonly}
                    />
                    <Input 
                        className={cl.profileInput}
                        placeholder={t('vvedite-imya-polzovatelya')}
                        value={profile?.username} 
                        onChange={onChangeUsername} 
                        readonly={readonly}
                    />
                    <CurrencySelect 
                        value={profile?.currency} 
                        onChange={onChangeCurrency} 
                        readonly={readonly}
                    />
                </div>
            </div>
        </div>
    );
};