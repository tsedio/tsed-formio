/* eslint-disable */
// polyfill request animation frames
import { configure } from 'enzyme'
// import { flatten } from 'lodash'
import Adapter from 'enzyme-adapter-react-16'

// import 'jest-localstorage-mock'
// import registerRequireContextHook from 'babel-plugin-require-context-hook/register'

// registerRequireContextHook()

if (typeof window !== 'undefined') {
  window.matchMedia = () => ({ matches: false })
  window.scrollTo = jest.fn()

  jest.mock(
    'react-svg',
    () =>
      function Svg () {
        return ''
      }
  )
}

// configure enzyme with react 16
configure({ adapter: new Adapter() })

// // polyfill flat
// if (!Array.prototype.flat) {
//   // eslint-disable-next-line no-extend-native
//   Object.defineProperty(Array.prototype, 'flat', {
//     value () {
//       return flatten(this)
//     }
//   })
// }
