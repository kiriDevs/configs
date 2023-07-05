# `@kiridevs_configs/prettier`

This package contains my personal default `prettier.config.js`

## Usage

Consult [`LICENSE.md`](./LICENSE.md) for license information.

This package is [published on `npm`](https://npmjs.com/package/@kiridevs_configs/prettier).

After installing it, configure `prettier` to use it via `package.json`:

```jsonc
// package.json
"prettier": "@kiridevs_configs/prettier/prettier.config.js"
```

### Extending

To extend / partially override the options of this config, create a new
`prettier.config.js` in your own project. There, you can import this package
and re-export your modified object:

```javascript
import prettierConfig from "@kiridevs_config/prettier";

module.exports = {
  // Interpolate @kiridevs_configs/prettier via the spread operator
  ...prettierConfig,

  // Overriding options
  tabWidth: 4,
  endOfLine: "crlf"
};
```
