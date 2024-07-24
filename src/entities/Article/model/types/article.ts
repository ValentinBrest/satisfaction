import { User } from 'entities/User/model/types/user';

import { ArticleBlockType, ArticleType } from '../consts/articleConsts';



export interface ArcticleCodeBlock {
    id: string;
    type: ArticleBlockType.CODE;
    code: string;
}
export interface ArcticleTextBlock {
    id: string;
    type: ArticleBlockType.TEXT;
    paragraphs: Array<string>;
    title?: string;
}
export interface ArcticleImageBlock {
    id: string;
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export type ArticleBlock = ArcticleCodeBlock | ArcticleTextBlock | ArcticleImageBlock;


export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    user: User;
    blocks: ArticleBlock[];
}