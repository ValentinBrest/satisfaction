import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { NavBar } from './NavBar';

export default {
    title: 'widget/NavBar',
    component: NavBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators= [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators= [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavBar = Template.bind({});
AuthNavBar.args = {};
AuthNavBar.decorators= [StoreDecorator({
    user: {authData: {}},
})];

