import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'light',
            values: [
                {
                    name: 'light',
                    value: '#e8e8ea',
                },
                {
                    name: 'dark',
                    value: '#0e0e75',
                },
            ],
        },
    },
    decorators: [RouterDecorator],
};

export default preview;
