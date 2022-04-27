module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['.'],
          alias: {
            '@app-components': './src/components',
            '@app-hooks': './src/hooks',
            '@app-lib': './src/lib',
            '@app-models': './src/models',
            '@app-state': './src/state',
            '@app-views': './src/views',
          },
        },
      ],
    ],
  };
};
