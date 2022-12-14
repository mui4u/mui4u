const path = require('path');
const { argv } = require('yargs');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;

const storiesPath = !argv._[0]
  ? path.resolve(__dirname, '../../src/**/*.story.@(ts|tsx)').replace(/\\/g, '/')
  : path
      .resolve(
        __dirname,
        `../../src/mui4u-${argv._[0].replace('@mui4u/', '')}/**/*.story.@(ts|tsx)`
      )
      .replace(/\\/g, '/');

module.exports = {
  stories: [storiesPath],
  addons: ['storybook-addon-turbo-build', 'storybook-dark-mode'],
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      plugins: [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: ['.ts', '.tsx', '.js'],
          configFile: path.join(__dirname, '../../tsconfig.json'),
        }),
      ],
    };

    // Turn off docgen plugin as it breaks bundle with displayName
    config.plugins.pop();

    return config;
  },
};
