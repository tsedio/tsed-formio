<p style="text-align: center" align="center">
 <a href="https://tsed.io" target="_blank"><img src="https://tsed.io/tsed-og.png" width="200" alt="Ts.ED logo"/></a>
</p>

[![Build & Release](https://github.com/TypedProject/tsed/workflows/Build%20&%20Release/badge.svg)](https://github.com/TypedProject/tsed-formio/actions?query=workflow%3A%22Build+%26+Release%22)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![backers](https://opencollective.com/tsed/tiers/badge.svg)](https://opencollective.com/tsed)

An opinionated lib to create actions and reducers for [Redux](https://github.com/rackt/redux) written in TypeScript and inspired from [react-act](https://github.com/pauldijou/redux-act) project.
The main goal is to use actions themselves as references inside the reducers rather than string constants.

## Install

```bash
# NPM
npm install @tsed/redux-utils --save
# Yarn
yarn add @tsed/redux-utils
```

## Usage

Even if there is a function named `createAction`, it actually creates an `action creator` according to Redux glossary. It was just a bit overkill to name the function `createActionCreator`. If you are not sure if something is an action or an action creator, just remember that actions are plain objects while action creators are functions.

TypeScript version:
```typescript
// Import functions
import { createStore } from 'redux';
import { createAction, createReducer } from '@tsed/redux-utils';

export type CounterState = number;

const createInitialState = (): CounterState => 0

// Create an action creator (description is optional)
const add = createAction<CounterState>('add some stuff');
const increment = createAction<CounterState>('increment the state');
const decrement = createAction<CounterState>('decrement the state');

// Create a reducer
// (ES6 syntax, see Advanced usage below for an alternative for ES5)
const counterReducer = createReducer<CounterState>({}, 0) // <-- This is the default state
  .on(increment, (state) => state + 1)
  .on(decrement, (state) => state - 1)
  .on(add, (state, payload) => state + payload)

// Create the store
const counterStore = createStore(counterReducer);

// Dispatch actions
counterStore.dispatch(increment()); // counterStore.getState() === 1
counterStore.dispatch(increment()); // counterStore.getState() === 2
counterStore.dispatch(decrement()); // counterStore.getState() === 1
counterStore.dispatch(add(5)); // counterStore.getState() === 6
```


Javascript version:
```typescript
// Import functions
import { createStore } from 'redux';
import { createAction, createReducer } from '@tsed/redux-utils';

const createInitialState = () => 0

// Create an action creator (description is optional)
const add = createAction('add some stuff');
const increment = createAction('increment the state');
const decrement = createAction('decrement the state');

// Create a reducer
// (ES6 syntax, see Advanced usage below for an alternative for ES5)
const counterReducer = createReducer({
  [increment]: (state) => state + 1,
  [decrement]: (state) => state - 1,
  [add]: (state, payload) => state + payload,
}, createInitialState); // <-- This is the default state

// Create the store
const counterStore = createStore(counterReducer);

// Dispatch actions
counterStore.dispatch(increment()); // counterStore.getState() === 1
counterStore.dispatch(increment()); // counterStore.getState() === 2
counterStore.dispatch(decrement()); // counterStore.getState() === 1
counterStore.dispatch(add(5)); // counterStore.getState() === 6
```


## FAQ

- **Does it work with Redux devtools?** Yes.

- **Do reducers work with combineReducers?** Of course, they are just normal reducers after all. Remember that according to the `combineReducers` checks, you will need to provide a default state when creating each reducer before combining them.

- **How does it work?** There is not much magic. A generated id is prepended to each action type and will be used inside reducers instead of the string constants used inside Redux by default.

- **Can you show how different it is from writing classic Redux?** Sure, you can check both commits to update [counter example](https://github.com/pauldijou/redux-act/commit/9e020137fb1b3e1e37d37c434032bec3c4e0873a) and [todomvc example](https://github.com/pauldijou/redux-act/commit/66a07913fdb36c9206e9bcbd5fa5577d1e6eceb7). You can also run both examples with `npm install && npm start` inside each folder.

- **Why having two syntax to create reducers?** The one with only a map of `action => reduce function` doesn't allow much. This is why the other one is here, in case you would need a small state inside the reducer, having something similar as an actor, or whatever you feel like. Also, one of the syntax is ES6 only.

- **Inside a reducer, why is it `(state, payload) => newState` rather than `(state, action) => newState`?** You can find more info about that on the `createReducer` API below, but basically, that's because an action is composed of metadata handled by the lib and your payload. Since you only care about that part, better to have it directly. You can switch back to the full action if necessary of course.

- **Why have you done that? Aren't string constants good enough?** I know that the Redux doc states that such magic isn't really good, that saving a few lines of code isn't worth hiding such logic. I can understand that. And don't get me wrong, the main goal of this lib isn't to reduce boilerplate (even if I like that it does) but to use the actions themselves as keys for the reducers rather than strings which are error prone. You never know what the new dev on your project might do... Maybe (s)he will not realize that the new constant (s)he just introduced was already existing and now everything is broken and a wormhole will appear and it will be the end of mankind. Let's prevent that!

## Advanced usage

```typescript
import { createStore } from 'redux';
import { createAction, createReducer } from '@tsed/redux-utils';

// You can create several action creators at once
// (but that's probably not the best way to do it)
const [increment, decrement] = ['inc', 'dec'].map(createAction);

// When creating action creators, the description is optional
// it will only be used for devtools and logging stuff.
// It's better to put something but feel free to leave it empty if you want to.
const replace = createAction();

// By default, the payload of the action is the first argument
// when you call the action. If you need to support several arguments,
// you can specify a function on how to merge all arguments into
// an unique payload.
let append = createAction('optional description', (...args) => args.join(''));

// There is another pattern to create reducers
// and it works fine with ES5! (maybe even ES3 \o/)
const stringReducer = createReducer(function (on) {
  on(replace, (state, payload) => payload)
    (append, (state, payload) => state += payload);
  // Warning! If you use the same action twice,
  // the second one will override the previous one.
}, 'missing a lette'); // <-- Default state

// Now, when calling actions, they will be automatically dispatched
append('r'); // stringStore.getState() === 'missing a letter'
replace('a'); // stringStore.getState() === 'a'
append('b', 'c', 'd'); // stringStore.getState() === 'abcd'
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
