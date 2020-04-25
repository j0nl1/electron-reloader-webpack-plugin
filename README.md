[npm_img]: https://img.shields.io/npm/v/electron-reloader-webpack-plugin.svg?style=flat-square
[npm_site]: https://www.npmjs.org/package/electron-reloader-webpack-plugin

[![npm info][npm_img]][npm_site]

# Electron Reloader (Webpack Plugin) 👋

[Webpack](https://webpack.js.org/) plugin that reloads [Electron](https://electronjs.org/) main process.

## Installation

Use NPM in order to install the package as dependecy.

```
npm install -D electron-reloader-webpack-plugin
```

## Usage

> Add plugin to your webpack config

```javascript
const ElectronReloader = require('electron-reloader-webpack-plugin');

module.exports = {
    plugins: [
        // ...
        // Call ElectronReloader here
        new ElectronReloader('electron', ['.'])
        // another example
        new ElectronReloader('npm', ['run', 'electron:start'])
        // In first argument you define what command to use and the second argument what args want to use.
    ]
};
```

> Start webpack with watch option

```
webpack --watch
```
