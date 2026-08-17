import { responsiveSliderTemplate } from "./responsive-slider.template";

const MAX_ITEMS = 8;

function createDefaultItem(index) {
  return {
    image: "https://placehold.co/600x400",
    imageAlt: "",
    title: `Item ${index + 1}`,
    description: "Add your description or supporting text here.",
    buttonText: "Shop Now",
    href: "/shop",
  };
}

function normalizeItems(items = [], itemCount = 1) {
  const safeCount = Math.min(Math.max(Number(itemCount) || 1, 1), MAX_ITEMS);
  const normalized = [];

  for (let i = 0; i < safeCount; i += 1) {
    const item = items[i] || {};

    normalized.push({
      image: item.image || "https://placehold.co/600x400",
      imageAlt: item.imageAlt || "",
      title: item.title || `Item ${i + 1}`,
      description:
        item.description || "Add your description or supporting text here.",
      buttonText: item.buttonText || "Shop Now",
      href: item.href || "/shop",
    });
  }

  return normalized;
}

export default {
  title: "Components/Responsive Slider",
  tags: ["autodocs"],

  render: (args) => {
    const items = normalizeItems(args.items, args.itemCount);

    return responsiveSliderTemplate({
      ...args,

      // Keep this synced with the CSS breakpoint in the template.
      sliderBreakpoint: 480,

      items,
    });
  },

  argTypes: {
    itemCount: {
      name: "Number of Items",
      description: "How many item objects to render from the Items list.",
      control: {
        type: "range",
        min: 1,
        max: MAX_ITEMS,
        step: 1,
      },
      table: {
        category: "General",
      },
    },

    items: {
      name: "Items",
      description:
        "Edit array objects to control each slide: image, imageAlt, title, description, buttonText, href.",
      control: "object",
      table: {
        category: "Items",
      },
    },

    ariaLabel: {
      name: "ARIA Label",
      control: "text",
      table: {
        category: "General",
      },
    },

    slidesPerPage: {
      name: "Slides Per Page",
      description:
        "Number of cards shown at once when the mobile slider is active.",
      control: {
        type: "number",
        min: 1,
        max: 4,
        step: 1,
      },
      table: {
        category: "Slider Settings",
      },
    },

    gap: {
      name: "Slider Gap",
      control: "text",
      table: {
        category: "Slider Settings",
      },
    },

    loop: {
      name: "Loop",
      control: "boolean",
      table: {
        category: "Slider Settings",
      },
    },

    arrows: {
      name: "Show Arrows",
      control: "boolean",
      table: {
        category: "Slider Settings",
      },
    },

    pagination: {
      name: "Show Pagination",
      control: "boolean",
      table: {
        category: "Slider Settings",
      },
    },

    sliderBreakpoint: {
      table: {
        disable: true,
      },
    },
  },

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export const Default = {
  args: {
    itemCount: 2,
    ariaLabel: "Featured products",
    slidesPerPage: 1,
    gap: "1rem",
    loop: true,
    arrows: true,
    pagination: true,

    items: [
      {
        image:
          "https://assets.basspro.com/image/upload/v1786552270/DigitalCreative/2026/BPS_CAB/Sitelets/Misc./Deer%20Hunting/12-Aug-2026/Frame_48098026.png",
        imageAlt: "",
        title: "Item 1",
        description: "Add your description or supporting text here.",
        buttonText: "Shop Now",
        href: "/shop",
      },
      {
        image:
          "https://assets.basspro.com/image/upload/v1693934552/ProductImages/450/master4_100114511_main.png",
        imageAlt: "",
        title: "Item 2",
        description: "Add your description or supporting text here.",
        buttonText: "Shop Now",
        href: "/shop",
      },
      createDefaultItem(2),
      createDefaultItem(3),
      createDefaultItem(4),
      createDefaultItem(5),
      createDefaultItem(6),
      createDefaultItem(7),
    ],
  },
};
