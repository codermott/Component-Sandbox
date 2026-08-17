import { createNavigation } from "./Navigation";

export default {
  title: "Navigation/Secondary Navigation",
  tags: ["autodocs"],

  render: (args) => createNavigation(args),

  argTypes: {
    shopAllLabel: {
      control: "text",
    },

    learnMoreLabel: {
      control: "text",
    },

    categoryLabel: {
      control: "text",
    },

    articlesLabel: {
      control: "text",
    },

    shopAllUrl: {
      control: "text",
    },
  },
};

export const Default = {
  args: {
    shopAllLabel: "Shop All",
    learnMoreLabel: "Learn More",
    categoryLabel: "Shop By Category",
    articlesLabel: "Articles",
    shopAllUrl: "/l/deer-hunting",
  },

  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/nBWEkX4E8mkGidfBp9RDHf/Untitled?node-id=793-19406&t=duYfNDAqBGTDWBYS-4",
    },
  },
};
