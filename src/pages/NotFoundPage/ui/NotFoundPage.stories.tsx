import type { Meta, StoryObj } from '@storybook/react';
import { NotFoundPage } from './NotFoundPage';

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
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
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
    },
};

export const Dark: Story = {
    decorators: [
        (Story) => (
            <div className="app dark">
                <Story />
            </div>

        ),
    ],
    args: {
    },
};
