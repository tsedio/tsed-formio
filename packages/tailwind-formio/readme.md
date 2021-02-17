<p style="text-align: center" align="center">
 <a href="https://tsed.io" target="_blank"><img src="https://tsed.io/tsed-og.png" width="200" alt="Ts.ED logo"/></a>
</p>

[![Build & Release](https://github.com/TypedProject/tsed/workflows/Build%20&%20Release/badge.svg)](https://github.com/TypedProject/tsed-formio/actions?query=workflow%3A%22Build+%26+Release%22)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![backers](https://opencollective.com/tsed/tiers/badge.svg)](https://opencollective.com/tsed)


This repository will change the rendering of forms in formio.js so that it uses html and classes compatible with the [Semantic UI](https://semantic-ui.com/) framework.

## Install

```bash
npm install @tsed/tailwind-formio  --save
```
Recommended packages:
```bash
{
  "devDependencies": {
    "tailwind": "4.0.0",
    "tailwindcss": "npm:@tailwindcss/postcss7-compat@^2.0.2",
    "tailwindcss-inset": "1.0.0",
    "tailwindcss-transforms": "2.2.0",
    "postcss-nested": "4.2.3"
  }
}
```

## Usage

Add this configuration:
```javascript
import { Formio, Templates } from "@tsed/react-formio";
import tailwind from "@tsed/tailwind-formio";
import "./index.css";
import "@tsed/tailwind-formio/styles/index.css";

Formio.use(tailwind);
Templates.framework = "tailwind";
```

Then create or update your style file:

```css
@import "./tailwind.css"; // @tailwind base; @tailwind utilities; @tailwind components;
@import "./fonts/source-sans-pro/index.css"; // extra fonts
@import "./fonts/inconsolata/index.css";
@import "./fonts/bxicons/index.css"; // use bx-icons instead of font-awesome
```

Edit your `postCss.config.js`:

```js
module.exports = {
  'plugins': [
    require('tailwindcss')(require('path/to/your/tailwind.config.json')),
    require('postcss-nested'),
    require('autoprefixer')
  ]
}
```

## Contributors
Please read [contributing guidelines here](./CONTRIBUTING.md).

<a href="https://github.com/TypedProject/tsed/graphs/contributors"><img src="https://opencollective.com/tsed/contributors.svg?width=890" /></a>


## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/tsed#backer)]

<a href="https://opencollective.com/tsed#backers" target="_blank"><img src="https://opencollective.com/tsed/tiers/backer.svg?width=890"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/tsed#sponsor)]

## License

The MIT License (MIT)

Copyright (c) 2016 - 2021 Romain Lenzotti

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[travis]: https://travis-ci.org/

