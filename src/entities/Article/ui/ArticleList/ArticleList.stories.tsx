import { ComponentMeta,ComponentStory } from '@storybook/react';

import { articles } from '../../mocks/data';
import { ArticleView } from '../../model/consts/articleConsts';

import { ArticleList } from './ArticleList';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList { ...args } />;


export const NormalList = Template.bind({});
NormalList.args = {
    articles,
    view: ArticleView.LIST,
};

export const LoadingList = Template.bind({});
LoadingList.args = {
    isLoading: true,
    view: ArticleView.LIST,
};

export const NormalGrid = Template.bind({});
NormalGrid.args = {
    articles,
    view: ArticleView.GRID,
};

export const LoadingGrid = Template.bind({});
LoadingGrid.args = {
    isLoading: true,
    view: ArticleView.GRID,
};
