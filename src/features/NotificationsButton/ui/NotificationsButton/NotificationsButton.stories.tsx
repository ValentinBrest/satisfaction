import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { NotificationsButton } from './NotificationsButton';

export default {
    title: 'features/NotificationsButton',
    component: NotificationsButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationsButton>;

const Template: ComponentStory<typeof NotificationsButton> = (args) => (
    <NotificationsButton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
