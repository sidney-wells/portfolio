import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from '@storybook/test';
import { TagList } from "../utils/index.js";

const meta = {
  title: "Example/TagList",
  component: TagList,
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
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    empty: false,
    skills: [
      {
        text: "one",
        size: 'small'
      },
      {
        text: "two",
        size: 'small'
      },
      {
        text: "three",
        size: 'small'
      },
    ],
  },
};