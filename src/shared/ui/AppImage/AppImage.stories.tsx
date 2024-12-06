import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Skeleton } from '../Skeleton';

import { AppImage } from './AppImage';

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => (
    <AppImage {...args} />
);

export const Loaded = Template.bind({});
Loaded.args = {
    src: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    width: '100px',
    height: '100px',
};

export const Fallback = Template.bind({});
Fallback.args = {
    src: 'error',
    errorFallback: <Skeleton width={100} height={100} border="50%" />,
};
