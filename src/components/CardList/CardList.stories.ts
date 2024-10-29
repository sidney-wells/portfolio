import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from '@storybook/test';
import { CardList } from "./CardList";

const meta = {
  title: "Example/CardList",
  component: CardList,
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
} satisfies Meta<typeof CardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    empty: false,
    cards: [
      {
        image: "",
        description: "",
        link: "",
      },
      {
        image: "",
        description: "",
        link: "",
      },
    ],
  },
};
