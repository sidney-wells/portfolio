import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from '@storybook/test';
import { Card } from ".";

const meta = {
  title: "Example/Card",
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "center",
    background: {
      values: [
        { name: "Light", value: "white" },
        { name: "Dark", value: "#333" },
      ],
      default: "Dark",
    },
  },
  args: {
    // onLogin: fn(),
    // onLogout: fn(),
    // onCreateAccount: fn(),
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    content: {
      image: "./styling.png",
      description: "This is the description",
      link: "https://wwww.google.com",
    },
  },
};
