import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code';

import { ArcticleCodeBlock } from '../../model/types/article';

import cl from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArcticleCodeBlock
}

export const ArticleCodeBlockComponent = (
    props: ArticleCodeBlockComponentProps,
) => {
    const { className, block } = props;

    return (
        <Code 
            className={classNames(cl.ArticleCodeBlockComponent, {}, [className])}
            text={block.code}
        />
    );
};
