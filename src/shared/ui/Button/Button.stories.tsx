import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Button, { ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'shared/Button',
    decorators: [ThemeDecorator(Theme.LIGHT)],
    // decorators: [
    //     (Story) => (
    //         <div style={{ margin: '3em' }}>
    //             {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
    //             <Story />
    //         </div>
    //     ),
    // ],
    // args: {}
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
    // render: () => <Button theme={ThemeButton.CLEAR} />,
};

export const Outline: Story = {
    args: {
        children: 'Outline',
        theme: ThemeButton.OUTLINE,
    },
    // render: () => <Button theme={ThemeButton.CLEAR} />,
};
