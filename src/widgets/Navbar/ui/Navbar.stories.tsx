import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from 'widgets/Navbar';

const meta: Meta<typeof Navbar> = {
    component: Navbar,
    title: 'widgets/Navbar',
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Basic: Story = {
    args: {

    },
};
