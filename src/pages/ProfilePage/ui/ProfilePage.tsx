import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/editableProfileCard';
import { Text } from '@/shared/ui';
import { Page } from '@/widgets/Page';

const ProfilePage = memo(() => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <Text text={t('profil-ne-naiden')} />;
    }

    return (
        <Page>
            <EditableProfileCard id={id} />
        </Page>
    );
});

export default ProfilePage;
