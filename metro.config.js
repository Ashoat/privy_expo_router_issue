/* eslint-disable no-undef */
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === '@walletconnect/ethereum-provider') {
    const result = context.resolveRequest(context, moduleName, platform);
    return {
      ...result,
      filePath: result.filePath.replace(
        /index\.es\.js$/,
        'index.cjs.js',
      ),
    };
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
