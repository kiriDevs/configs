# `@kiridevs_configs/eslint`

This package contains my personal default `eslint` configuration.

**Note:** This package uses the new, Flat Config format (`eslint.config.js`).
This is only supported since ESLint version `v8.21.0`, and will not become the
default format before major version 9.

## Usage

Consult [`LICENSE.md`](./LICENSE.md) for license information.

This package is [published on `npm`](https://npmjs.com/package/@kiridevs_configs/eslint).

After installing it, create an `eslint.config.js` that re-exports this package's
default export:

```javascript
// eslint.config.json
export default (await import("@kiridevs_configs/eslint")).default;
```

### Extending

This package's `default` export is an array of Flat Config objects.
To extend it, follow standard practice for the ESLint Flat Config format
(see <https://eslint.org/docs/latest/use/configure/configuration-files-new>):

```javascript
// eslint.config.json
import kdConfig from "@kiridevs_configs/eslint";

export default [
  {
    // Allow 'debugger;' statements in CJS files
    files: ["src/**/*.cjs"],
    rules: {
        "no-debugger": "off"
    }
  }, // Make sure your OVERrides are OVER the base config
  ...kdConfig // Spread array elements into this new array
];
```
