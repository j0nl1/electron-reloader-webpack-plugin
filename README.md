[npm_img]: https://img.shields.io/npm/v/electron-reloader-webpack-plugin.svg?style=flat-square
[npm_site]: https://www.npmjs.org/package/electron-reloader-webpack-plugin
[codecov_img]: https://img.shields.io/codecov/c/github/j0nl1/electron-reloader-webpack-plugin/master.svg?style=flat-square
[codecov_url]: http://codecov.io/github/j0nl1/electron-reloader-webpack-plugin?branch=master

[![npm info][npm_img]][npm_site] [![codecov_info][codecov_img]][codecov_url]

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
const ElectronReloaderPlugin = require('electron-reloader-webpack-plugin');

module.exports = {
    plugins: [
        // ...
        // Call ElectronReloader here
        new ElectronReloaderPlugin('electron', ['.'])
        // another example
        new ElectronReloaderPlugin('npm', ['run', 'electron:start'])
        // In first argument you define what command to use and the second argument what args want to use.
    ]
};
```

> Start webpack with watch option

```
webpack --watch
```
