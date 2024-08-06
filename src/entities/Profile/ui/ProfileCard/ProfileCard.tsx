import { useTranslation } from 'react-i18next';

import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar, Input, Loader, Text, TextAlign, TextTheme } from '@/shared/ui';
import { HStack, VStack } from '@/shared/ui/Stack';

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
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack
                justify={'center'}
                max
                className={classNames(cl.ProfileCard, {}, [
                    className,
                    cl.loading,
                ])}
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                justify={'center'}
                max
                className={classNames(cl.ProfileCard, {}, [
                    className,
                    cl.error,
                ])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('proizloshla-oshibka-pri-zagruzke-profilya')}
                    text={t('poprobuite-obnovit-stranicu')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    return (
        <HStack
            max
            align={'start'}
            className={classNames(cl.ProfileCard, {}, [className])}
        >
            {profile?.avatar && (
                <Avatar src={profile?.avatar} size={150} alt="usericon" />
            )}
            <VStack max gap="8" className={cl.inputWrap}>
                <Input
                    className={cl.profileInput}
                    placeholder={t('vashe-imya')}
                    value={profile?.first}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                    data-testid={'ProfileCard.firstname'}
                />
                <Input
                    className={cl.profileInput}
                    placeholder={t('vasha-familiya')}
                    value={profile?.lastname}
                    onChange={onChangeLastname}
                    readonly={readonly}
                    data-testid={'ProfileCard.lastname'}
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
                    className={cl.input}
                    value={profile?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cl.input}
                    value={profile?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </VStack>
        </HStack>
    );
};
