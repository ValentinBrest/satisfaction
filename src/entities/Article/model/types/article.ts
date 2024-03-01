import { User } from 'entities/User/model/types/user';

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt'
}

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

export enum ArticleBlockType {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    CODE = 'CODE',
}

export enum ArticleType {
    ALL= 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export enum ArticleView {
    LIST = 'LIST',
    GRID = 'GRID',
}

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