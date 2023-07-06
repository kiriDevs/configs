# `@kiridevs_configs/tsconfig`

This package contains my personal default `tsconfig.json`.

## Usage

Consult [`LICENSE.md`](./LICENSE.md) for license information.

This package is [published on `npm`](https://npmjs.com/package/@kiridevs_configs/tsconfig).

After installing it, create a `tsconfig.json` that `extends` this package:

```jsonc
// tsconfig.json
{
  "extends": "@kiridevs_configs/tsconfig"
}
```

### Extending

To extend this base config, follow TypeScript standards by adding your desired
overrides to the `tsconfig.json` you already created:

```diff
--- a/tsconfig.json
+++ b/tsconfig.json
{
  "extends": "@kiriDevs_configs/tsconfig",
+ "compilerOptions: {
+   "noImplicitAny": false
+ }
}
```
