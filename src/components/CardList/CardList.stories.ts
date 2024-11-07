import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from '@storybook/test';
import { CardList } from ".";

const meta = {
  title: "Example/CardList",
  component: CardList,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "center",
  },
  // args: {
    // onLogin: fn(),
    // onLogout: fn(),
    // onCreateAccount: fn(),
  // },
} satisfies Meta<typeof CardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    empty: false,
    cards: [
      {
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
        description: "This is a story card number 1"
      },
      {
        imageObject: {
          src: "./styling.png",
          alt: "This is the description",
          link: "https://wwww.google.com",
          width: 150,
          height: 150
        },
        buttonObject: {
          label: 'Button',
          size: 'medium'
        },
        description: "This is a story card number 2"
      } 
    ],
  },
};
