import type { Decorator, Preview } from '@storybook/react';

import '../../src/app/styles/index.scss';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/provider/ThemeProvider/index';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        decorators: [
            (Story: () => Decorator) => Story(),
            ThemeDecorator(Theme.DARK),
        ],
    },
};

export default preview;
