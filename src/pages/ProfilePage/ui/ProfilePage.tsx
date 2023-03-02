import { useTranslation } from 'react-i18next';

function ProfilePage() {
    const {t} = useTranslation('profile');
    return (
        <>
            <div>{t('profilePage')}</div>
        </>
    );
}

export default ProfilePage;
