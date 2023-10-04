import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';
// import { OutlineDark } from '../../../../../prodject/frontend-project/src/shared/ui/Button/Button.stories';
// import { Theme } from 'app/provider/ThemeProvider';

const meta = {
    title: 'shared/Button',
    component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};

export const OutlineDark: Story = {
    decorators: [
        (Story) => (
            <div className="app dark">
                <Story />
            </div>
        ),
    ],
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};
// OutlineDark.decorators = [TextDecoder(Theme.DARK)]
