import {
  createNorthernFlightNavMenu,
  navMenuCssSnippet,
  navMenuHtmlSnippet,
  navMenuJsSnippet,
} from "./NavMenus";

const renderSnippet = (content) => {
  const pre = document.createElement("pre");
  pre.className = "nav-menu-snippet";
  pre.textContent = content;
  return pre;
};

export default {
  title: "Navigation/Northern Flight Nav",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export const Component = {
  render: () => createNorthernFlightNavMenu(),
  parameters: {
    docs: {
      source: {
        language: "html",
        code: navMenuHtmlSnippet,
      },
      description: {
        story:
          "Rendered nav component from test.html. Use the HTML, CSS, and JS snippet stories to copy implementation code directly.",
      },
    },
  },
};

export const HtmlSnippet = {
  name: "Copy HTML",
  render: () => renderSnippet(navMenuHtmlSnippet),
  parameters: {
    docs: {
      source: {
        language: "html",
        code: navMenuHtmlSnippet,
      },
    },
  },
};

export const CssSnippet = {
  name: "Copy CSS",
  render: () => renderSnippet(navMenuCssSnippet),
  parameters: {
    docs: {
      source: {
        language: "css",
        code: navMenuCssSnippet,
      },
    },
  },
};

export const JsSnippet = {
  name: "Copy JS",
  render: () => renderSnippet(navMenuJsSnippet),
  parameters: {
    docs: {
      source: {
        language: "javascript",
        code: navMenuJsSnippet,
      },
    },
  },
};
