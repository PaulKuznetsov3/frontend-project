import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
// import { OutlineDark } from '../../../../../prodject/frontend-project/src/shared/ui/Button/Button.stories';
// import { Theme } from 'app/provider/ThemeProvider';

const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
    decorators: [
        (Story) => (
            <div className="app light">
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

    argTypes: {

    },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    decorators: [
        (Story) => (
            <div className="app dark">
                <Story />
            </div>
        ),
    ],
    args: {},
};

// OutlineDark.decorators = [TextDecoder(Theme.DARK)]
