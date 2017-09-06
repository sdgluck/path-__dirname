# path-__dirname

> Get a path in the __dirname

__Note:__ this will not work for modules that are executed indirectly, for example testing engines like Jest.

Unlike the [`resolve-*`](https://github.com/sindresorhus/resolve-cwd) these modules allow resolution of non-module paths. 

## Install

```sh
npm install --save path-__dirname
```

```sh
yarn add path-__dirname
```

## Import

```js
// ES2015
import dirname from 'path-__dirname'
```

```js
// CommonJS
var dirname = require('path-__dirname')
```

## Usage

### `dirname([path]) : String`

Get a path in the dirname.

- __path__ {String} _(optional)_ path to get in the dirname

Returns a string.

## Example

```js
import dirname from 'path-__dirname'

dirname() === __dirname //=> true
dirname('pineapple') //=> C:/User/Spongebob Squarepants/projects/bikini-bottom/pineapple
```

## See also

- [`path-cwd`](https://github.com/sdgluck/path-cwd)
- [`path-homedir`](https://github.com/sdgluck/path-homedir)

## Contributing

All pull requests and issues welcome!

If you're not sure how, check out the [great video tutorials on egghead.io](http://bit.ly/2aVzthz)!

## License

MIT © [Sam Gluck](https://github.com/sdgluck)
