import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui';

import { ArcticleTextBlock } from '../../model/types/article';

import cl from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArcticleTextBlock;
}

export const ArticleTextBlockComponent = memo((
    props: ArticleTextBlockComponentProps,
) => {
    const { className, block } = props;

    return (
        <div className={classNames(cl.ArticleTextBlockComponent, {}, [className])}
        >
            {block.title && (
                <Text title={block.title} className={cl.title}/>
            )}
            {
                block.paragraphs.map(paragraph => (
                    <Text text={paragraph} key={paragraph} className={cl.paragraph}/>
                )) 
            }
        </div>
    );
});
