<p style="text-align: center" align="center">
 <a href="https://tsed.io" target="_blank"><img src="https://tsed.io/tsed-og.png" width="200" alt="Ts.ED logo"/></a>
</p>

[![Build & Release](https://github.com/TypedProject/tsed/workflows/Build%20&%20Release/badge.svg)](https://github.com/TypedProject/tsed-formio/actions?query=workflow%3A%22Build+%26+Release%22)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![backers](https://opencollective.com/tsed/tiers/badge.svg)](https://opencollective.com/tsed)

A [React](http://facebook.github.io/react/) library for rendering out forms based on the [Form.io](https://www.form.io) platform.

This module is based on the original [react-formio](https://github.com/formio/react-formio) and add extra features listed above.

See our [storybook](https://formio.tsed.io/) to see all available components.

## Features

* Provide extends component to create your formio backoffice

## Install

`@tsed/react-formio-container` can be used on the server, or bundled for the client using a
npm-compatible packaging system such as [Browserify](http://browserify.org/) or
[webpack](http://webpack.github.io/).

```bash
npm install --save @tsed/react-formio-container file-saver
npm install --save-dev @types/file-saver
```

## Examples
```javascript
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/formio/:formType" exact={false}>
              <FormioContainer
                basePath={"/formio/:formType"}
                operations={{
                  edit: true,
                  access: true,
                  actions: true,
                  submissions: true,
                  exports: true,
                  delete: true,
                }}
                onSuccess={(eventObj) => {
                  console.log(eventObj)
                }}
                onError={(eventObj) => {
                  console.log(eventObj)
                }}/>
            </Route>  
          </Switch>  
        </ConnectedRouter>
        <ToastContainer />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
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

