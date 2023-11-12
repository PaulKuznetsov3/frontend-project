import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
// import { OutlineDark } from '../../../../../prodject/frontend-project/src/shared/ui/Button/Button.stories';
// import { Theme } from 'app/provider/ThemeProvider';

const meta = {
    title: 'shared/Input',
    component: Input,
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: '123124',
    },
};
