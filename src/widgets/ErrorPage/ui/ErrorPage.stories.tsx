import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorPage } from './ErrorPage';

const meta = {
    title: 'widget/ErrorPage',
    component: ErrorPage,
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
} satisfies Meta<typeof ErrorPage>;

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
