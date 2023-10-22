import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta = {
    title: 'widget/Modal',
    component: Modal,
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
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        isOpen: true,
        children: 'skjdfnsdjf psdfjosdf isdjfoisdjgfoi disfjdfsj sdpofkjsdfij posdfkdsfj psdfposdfjdisfj sdfjfjsdfij sdpgjoi sdpofjsprfj0ew sdofjoi',
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
        isOpen: true,
        children: 'skjdfnsdjf psdfjosdf isdjfoisdjgfoi disfjdfsj sdpofkjsdfij posdfkdsfj psdfposdfjdisfj sdfjfjsdfij sdpgjoi sdpofjsprfj0ew sdofjoi',
    },
};
