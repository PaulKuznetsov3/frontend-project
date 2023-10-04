import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
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
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primory: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
        to: '/',
    },
};

export const Secondary: Story = {
    decorators: [
        (Story) => (
            <div className="app">
                <Story />
            </div>
        ),
    ],
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
        to: '/',
    },
};

export const Red: Story = {
    decorators: [
        (Story) => (
            <div className="app">
                <Story />
            </div>
        ),
    ],
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED,
        to: '/',
    },

};

export const PrimoryDark: Story = {
    decorators: [
        (Story) => (
            <div className="app dark">
                <Story />
            </div>
        ),
    ],
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
        to: '/',
    },
};

export const SecondaryDark: Story = {
    decorators: [
        (Story) => (
            <div className="app dark">
                <Story />
            </div>
        ),
    ],
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
        to: '/',
    },
};

export const RedDark: Story = {
    decorators: [
        (Story) => (
            <div className="app dark">
                <Story />
            </div>
        ),
    ],
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED,
        to: '/',
    },

};
