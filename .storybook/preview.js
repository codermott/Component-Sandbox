/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    options: {
      showPanel: true,
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
