import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from '@storybook/test';
import { Text } from "../utils/index.js";

const meta = {
  title: "Example/Text",
  component: Text,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "center",
  },
  args: {
    // onLogin: fn(),
    // onLogout: fn(),
    // onCreateAccount: fn(),
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Primary text",
    size: 'primary'
  },
};

export const Small: Story = {
  args: {
    text: "Small text",
    size: 'small'
  },
};

export const Large: Story = {
  args: {
    text: "Big text",
    size: 'large'
  },
};
