/* eslint-disable */
// polyfill request animation frames

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
