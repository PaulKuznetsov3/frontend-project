import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
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
} satisfies Meta<typeof MainPage>;

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
