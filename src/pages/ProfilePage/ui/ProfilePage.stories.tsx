import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import avatar from '../../../shared/assets/test/admin.png';

import ProfilePage from './ProfilePage';
export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        profile: {
            form: {
                first: 'Vasya',
                lastname: 'Pupkin',
                country: Country.Belarus,
                city: 'Brest',
                username: 'admin',
                age: 27,
                currency: Currency.EUR,
                avatar,
            },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                first: 'Vasya',
                lastname: 'Pupkin',
                country: Country.Belarus,
                city: 'Brest',
                username: 'admin',
                age: 27,
                currency: Currency.EUR,
                avatar,
            },
        },
    }),
];
