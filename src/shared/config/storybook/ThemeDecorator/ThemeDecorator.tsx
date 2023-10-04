import { Decorator, Story } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Decorator) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
