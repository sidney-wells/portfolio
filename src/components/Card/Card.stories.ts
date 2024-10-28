import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import { Card } from './Card';

const meta = {
  title: 'Example/Card',
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'center',
    background: {
      values: [
        { name: 'Light', value: 'white'},
        { name: 'Dark', value: '#333'}
      ],
      default: 'Dark'
    }
  },
  args: {
    // onLogin: fn(),
    // onLogout: fn(),
    // onCreateAccount: fn(),
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    image: '',
    content: '',
    children: 'This is children'
  },
};