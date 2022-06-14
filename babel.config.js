module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~src': './src',
          '~components': './src/components',
          '~hooks': './src/hooks',
          '~navigation': './src/navigation',
          '~screens': './src/screens',
          '~utils': './src/utils',
          '~assets': './src/assets',
        },
      },
    ],
  ],
};
