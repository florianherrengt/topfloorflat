module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: ['@storybook/addon-actions'],
    webpackFinal: async (config) => {
        // do mutation to the config

        return config;
    },
};
