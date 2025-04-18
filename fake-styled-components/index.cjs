const React = require("react");

const component =
  () =>
  ({ key, children }) => <React.Fragment key={key}>{children}</React.Fragment>;

component.withConfig = () => component;
component.attrs = () => component;

const styled = new Proxy(component, {
  apply(target, thisArg, argArray) {
    return component;
  },
  get(_, p) {
    return component;
  },
});

module.exports = {
  styled,
  css: () => "",
};
