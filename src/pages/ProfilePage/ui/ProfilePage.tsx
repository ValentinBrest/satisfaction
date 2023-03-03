import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ProfilePage = memo(() => {
    const {t} = useTranslation('profile');
    return (
        <>
            <div>{t('profilePage')}</div>
        </>
    );
});

export default ProfilePage;
