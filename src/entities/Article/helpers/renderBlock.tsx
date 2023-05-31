import { ArticleBlock, ArticleBlockType } from '../model/types/article';
import { ArticleCodeBlockComponent } from '../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';


export const renderBlock = (block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent />;
    case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent />;
    case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent />;
    default:
        return null;
    }
};