# Liquid State UI Kit

[![npm](https://img.shields.io/npm/v/@liquid-state/ui-kit.svg?style=flat-square)](https://www.npmjs.com/package/@liquid-state/ui-kit)

Liquid state UI kit for Desktop (Web) and Mobile (Web) applications, based on ant design.

Custom components aim to fit into the existing antd system, we continue to support the ability to theme all of our new components using the same themeing mechanism available in antd.

This repository contains custom components and a storybook showing off all of the ant components we use as well as the custom components which are implemented here.

## Using the UI Kit

You can install the UI kit into your project with npm or yarn
```
npm install --save @liquid-state/ui-kit
```
or with yarn
```
yarn add @liquid-state/ui-kit
```

The UI kit code is a set of es6 modules, you will probably need a code bundler such as [webpack](https://www.npmjs.com/package/webpack) or [rollup](https://www.npmjs.com/package/rollup) to use it.

Additionally the style components are currently uncompiled less files, to enable the theme support, you will need to configure your bundler to support less.

*Note*: Creating a simple getting started version with compiled CSS is tracked in [this issue](https://github.com/liquid-state/ls-ui-kit/issues/20)

## Storybook

This project includes a storybook which helps to document each of the components and how to use them.

*Todo*: Host the storybook so it can be accessed without cloning the repository.


## Contributing

We welcome contributions for bugfixes, extensions or new components, there is a contributing guide available on our project [wiki](https://github.com/liquid-state/ls-ui-kit/wiki).

If you wish to contribute, you are welcome to open an issue to discuss your idea with us, or just open a new pull request!
