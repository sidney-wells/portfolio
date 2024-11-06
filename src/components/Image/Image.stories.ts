import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from '@storybook/test';
import { Image } from "../utils/index.js";

const meta = {
  title: "Example/Image",
  component: Image,
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
      default: "Light",
    },
  },
  args: {
    // onLogin: fn(),
    // onLogout: fn(),
    // onCreateAccount: fn(),
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: "./styling.png",
    alt: "This is the image alt",
    link: "https://www.google.com",
    width:150,
    height:150
  },
};
