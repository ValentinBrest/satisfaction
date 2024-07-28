import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Listbox } from './Listbox';

export default {
    title: 'shared/Listbox',
    component: Listbox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Listbox>;

const Template: ComponentStory<typeof Listbox> = (args) => (
    <Listbox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    label: 'Укажите значение',
    items: [
        { value: '123', content: 'Первый пункт' },
        { value: '123', content: 'Второй пункт' },
    ],
};
