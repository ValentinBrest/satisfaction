import { ComponentMeta,ComponentStory } from '@storybook/react';

import { Button } from '../../../Button/Button';

import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover { ...args } />;

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>1233</Button>,
    direction: 'bottomLeft',
    children: '123',
};
