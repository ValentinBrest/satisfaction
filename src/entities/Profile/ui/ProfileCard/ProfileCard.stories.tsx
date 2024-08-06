import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import avatar from '../../../../shared/assets/test/admin.png';

import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    profile: {
        first: 'Vasya',
        lastname: 'Pupkin',
        country: Country.Belarus,
        city: 'Brest',
        username: 'admin',
        age: 27,
        currency: Currency.EUR,
        avatar,
    },
};

export const Dark = Template.bind({});
Dark.args = {
    profile: {
        first: 'Vasya',
        lastname: 'Pupkin',
        country: Country.Belarus,
        city: 'Brest',
        username: 'admin',
        age: 27,
        currency: Currency.EUR,
        avatar,
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};


export const Error = Template.bind({});
Error.args = {
    error: '123',
};