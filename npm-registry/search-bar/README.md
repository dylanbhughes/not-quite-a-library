# search-bar

> A Vue.js component module

## Installation

### Using yarn

`yarn add search-bar`

### Using npm

`npm i --save search-bar`

## Demo and Docs

`npm run serve`

## Usage

### ES6 Modules / CommonJS

```js
import SearchBar from 'search-bar';
import 'search-bar/dist/search-bar.min.css';

Vue.component('search-bar', SearchBar);
```

```html
<search-bar text="Hello World!"></search-bar>
```

### UMD

```html
<search-bar text="Hello World!"></search-bar>

<script src="https://unpkg.com/vue" charset="utf-8"></script>
<script src="./dist/umd/search-bar.min.js" charset="utf-8"></script>
<link rel="stylesheet" type="text/css" href="./dist/umd/search-bar.min.css">

<script type="text/javascript">
  Vue.component('search-bar', window.SearchBar);
</script>
```

## Build

Build configuration is located in the `poi.config.js` file, to build just run: `npm run build`, it will build to `cjs` and `umd` directories.

## Tests

This template uses karma with chai by default, you can change test settings in poi.config.js

`npm run test`
`npm run test:watch`
`npm run test:cov`

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
