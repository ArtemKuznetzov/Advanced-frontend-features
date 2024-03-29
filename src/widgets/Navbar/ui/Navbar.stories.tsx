import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from 'widgets/Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Navbar> = {
    component: Navbar,
    title: 'widgets/Navbar',
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Basic: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
