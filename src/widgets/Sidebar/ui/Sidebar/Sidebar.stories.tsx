import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from 'widgets/Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
    // decorators: [
    //     (Story) => (
    //         <div style={{ margin: '3em' }}>
    //             {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
    //             <Story />
    //         </div>
    //     ),
    // ],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Basic: Story = {};

export const Dark: Story = {};
