import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from '@storybook/test';
import { CardList } from "../utils/index.js";

const meta = {
  title: "Example/CardList",
  component: CardList,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
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
          width: 300,
          height: 200,
        },
        buttonObject: {
          primary: true,
          size: "medium",
          label: "Button",
        },
        description: "This is a story card number 1",
        skills: [
          {
            text: "AWS",
            size: "small",
          },
          {
            text: "React",
            size: "small",
          },
          {
            text: "Javascript",
            size: "small",
          },
        ],
      },
      {
        imageObject: {
          src: "./styling.png",
          alt: "This is the description",
          link: "https://wwww.google.com",
          width: 300,
          height: 200,
        },
        buttonObject: {
          label: "Button",
          size: "medium",
        },
        description: "This is a story card number 2",
        skills: [
          {
            text: "AWS",
            size: "small",
          },
          {
            text: "React",
            size: "small",
          },
          {
            text: "Javascript",
            size: "small",
          },
        ],
      },
      {
        imageObject: {
          src: "./styling.png",
          alt: "This is the description",
          link: "https://wwww.google.com",
          width: 300,
          height: 200,
        },
        buttonObject: {
          primary: true,
          size: "medium",
          label: "Button",
        },
        description: "This is a story card number 1",
        skills: [
          {
            text: "AWS",
            size: "small",
          },
          {
            text: "React",
            size: "small",
          },
          {
            text: "Javascript",
            size: "small",
          },
        ],
      },
      {
        imageObject: {
          src: "./styling.png",
          alt: "This is the description",
          link: "https://wwww.google.com",
          width: 300,
          height: 200,
        },
        buttonObject: {
          label: "Button",
          size: "medium",
        },
        description: "This is a story card number 2",
        skills: [
          {
            text: "AWS",
            size: "small",
          },
          {
            text: "React",
            size: "small",
          },
          {
            text: "Javascript",
            size: "small",
          },
        ]
      }
    ],
  },
};
