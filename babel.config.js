module.exports = function (api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@shared': './src/shared',
            '@flows': './src/flows',
            '@features': './src/features',
            '@app': './src/app',
            '@ui': './src/ui',
          },
        },
      ],
    ],
  };
};
