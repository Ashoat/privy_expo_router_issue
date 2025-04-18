/* eslint-disable no-undef */
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === "@walletconnect/ethereum-provider") {
    const result = context.resolveRequest(context, moduleName, platform);
    return {
      ...result,
      filePath: result.filePath.replace(/index\.es\.js$/, "index.cjs.js"),
    };
  }

  if (moduleName === "styled-components") {
    return {
      type: "sourceFile",
      filePath: path.resolve(__dirname, "./fake-styled-components/index.cjs"),
    };
  }

  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
