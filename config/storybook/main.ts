/* eslint-disable no-param-reassign */
import type { StorybookConfig } from '@storybook/react-webpack5';
import webpack from 'webpack';

const config: StorybookConfig = {
    stories: [
        // коммент регулярки, т.к. расширение всегда будет либо ts, либо tsx
        // '../../src/**/*.mdx',
        // т.к. в скрипте с запуском конфигурация сторибука лежит в другом месте, нужно поменять путь
        '../../src/**/*.stories.@(ts|tsx)',
    ],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    // Необходимо, чтобы решить проблему React is not defined
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic',
                },
            },
        },
    }),
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (config) => {
        config.module = config.module || {};
        config.module.rules = config.module.rules || [];

        // This modifies the existing image rule to exclude .svg files
        // since you want to handle those files with @svgr/webpack
        const imageRule = config.module.rules.find((rule: {test: RegExp}) => rule?.test?.test('.svg'));
        if (imageRule && typeof imageRule === 'object') {
            imageRule.exclude = /\.svg$/;
        }

        // Configure .svg files to be loaded with @svgr/webpack
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};
export default config;
