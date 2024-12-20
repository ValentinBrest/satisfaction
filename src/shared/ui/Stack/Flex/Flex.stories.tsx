import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
        </>
    ),
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    gap: '8',
    children: (
        <>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
        </>
    ),
};


export const RowGap16 = Template.bind({});
RowGap16.args = {
    gap: '16',
    children: (
        <>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
        </>
    ),
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: (
        <>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
        </>
    ),
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
    direction: 'column',
    gap: '32',
    children: (
        <>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
        </>
    ),
};
