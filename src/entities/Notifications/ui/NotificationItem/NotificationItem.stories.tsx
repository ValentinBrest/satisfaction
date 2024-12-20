import { ComponentMeta,ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem { ...args } />;

export const Normal = Template.bind({});
Normal.args = {
    item: {
        id: '1',
        title: 'string',
        description: 'string',
        userId: '1',
    },
};
Normal.decorators = [StoreDecorator({})];