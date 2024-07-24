import { ComponentMeta, ComponentStory } from '@storybook/react';

import { article } from '../../mocks/data';
import { ArticleView } from '../../model/consts/articleConsts';

import { ArticleListItem } from './ArticleListItem';

export default {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
    <ArticleListItem {...args} />
);

export const LIST = Template.bind({});
LIST.args = {
    article,
    view: ArticleView.LIST,
};

export const GRID = Template.bind({});
GRID.args = {
    article,
    view: ArticleView.GRID,
};
