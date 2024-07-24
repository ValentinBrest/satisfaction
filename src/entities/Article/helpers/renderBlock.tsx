import { ArticleBlockType } from '../model/consts/articleConsts';
import { ArticleBlock } from '../model/types/article';
import { ArticleCodeBlockComponent } from '../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';

import cl from '../ui/ArticleDetails/ArticleDetails.module.scss';

export const renderBlock = (block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} className={cl.block} block={block}/>;
    case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} className={cl.block} block={block}/>;
    case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} className={cl.block} block={block}/>;
    default:
        return null;
    }
};