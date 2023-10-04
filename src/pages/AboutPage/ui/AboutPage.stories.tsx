import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
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
} satisfies Meta<typeof AboutPage>;

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
