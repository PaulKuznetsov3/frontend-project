import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    decorators: [
        (Story) => (
            <div className="app light">
                <BrowserRouter>
                    <Story />
                </BrowserRouter>
            </div>

        ),
    ],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

    argTypes: {

    },
} satisfies Meta<typeof ThemeSwitcher>;

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
