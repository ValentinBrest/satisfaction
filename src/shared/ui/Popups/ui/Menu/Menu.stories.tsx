import { ComponentMeta, ComponentStory } from '@storybook/react';

import AvatarImg from '../../../../assets/test/admin.png';
import { Avatar } from '../../../Avatar';

import { Menu } from './Menu';

export default {
    title: 'shared/Menu',
    component: Menu,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    items: [{
        content: 'Профиль',
    }, 
    {
        content: 'Выйти',
    }],
    trigger: (
        <Avatar
            size={30}
            src={AvatarImg}
            alt="avatar"
            fallbackInverted={true}
        />
    ),
    direction: 'bottomRight',
};
