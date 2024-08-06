import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui';
import { VStack } from '@/shared/ui/Stack';

import { ArcticleImageBlock } from '../../model/types/article';

import cl from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArcticleImageBlock;
}

export const ArticleImageBlockComponent = (
    props: ArticleImageBlockComponentProps,
) => {
    const { className, block } = props;
    const { t } = useTranslation();

    return (
        <VStack gap="8" align="center" className={classNames('', {}, [className])}>
            <img src={block.src} className={cl.img} alt={block.title} />
            {block.title && (
                <Text
                    text={block.title}
                    align={TextAlign.CENTER}
                />
            )}
        </VStack>
    );
};
