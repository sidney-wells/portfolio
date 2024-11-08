import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from '@storybook/test';
import { Card } from "../utils/index.js";


const meta = {
  title: "Example/Card",
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    background: {
      // values: [
      //   { name: "Light", value: "white" },
      //   { name: "Dark", value: "#333" },
      // ],
      // default: "Light",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    imageObject: {
      src: "./styling.png",
      alt: "This is the description",
      link: "https://wwww.google.com",
      width: 150,
      height: 150
    },
    buttonObject: {
      primary: true,
      size: 'medium',
      label: 'Button'
    },
    description: "This is a story card number 1",
    skills: ['one', 'two']
  },
};
