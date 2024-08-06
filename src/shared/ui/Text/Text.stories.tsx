import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Text, TextSize, TextTheme} from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title about me',
    text: 'Text need progress',
};

export const Dark = Template.bind({});
Dark.args = {
    title: 'Title about me',
    text: 'Text need progress',
};
Dark.decorators= [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title about me',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text need progress',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title about me',
};
OnlyTitleDark.decorators= [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text need progress',
};
OnlyTextDark.decorators= [ThemeDecorator(Theme.DARK)];

export const ErrorText= Template.bind({});
ErrorText.args = {
    title: 'Title about me',
    text: 'Text need progress',
    theme: TextTheme.ERROR,
};

export const ErrorTextDark= Template.bind({});
ErrorTextDark.args = {
    title: 'Title about me',
    text: 'Text need progress',
    theme: TextTheme.ERROR,
};
ErrorTextDark.decorators= [ThemeDecorator(Theme.DARK)];

export const SizeL= Template.bind({});
SizeL.args = {
    title: 'Title about me',
    text: 'Text need progress',
    size: TextSize.L,
};