/* eslint-disable */
// polyfill request animation frames
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

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
