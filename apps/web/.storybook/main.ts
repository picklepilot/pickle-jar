
import type { StorybookConfig } from '@storybook/vue3-vite';

import path from 'path'

const _require = typeof require === 'undefined' ? import.meta : require;
const getAbsolutePath = (packageName: string): any =>
  path.dirname(_require.resolve(path.join(packageName, 'package.json'))).replace(/^file:\/\//, '');
 

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-vitest")
  ],
  framework: {
    // Replace your-framework with the same one you've imported above.
    name: getAbsolutePath('@storybook/vue3-vite'),
    options: {},
  },
};

export default config; 