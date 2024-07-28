import { ComponentMeta,ComponentStory } from '@storybook/react';

import { Menu } from './Menu';

export default {
    title: 'shared/Menu',
    component: Menu,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
