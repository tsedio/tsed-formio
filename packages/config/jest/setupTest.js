import '@testing-library/jest-dom/extend-expect'

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn()
})

Object.defineProperty(URL, 'createObjectURL', {
  writable: true,
  value: jest.fn()
})

if (typeof window !== 'undefined') {
  window.scrollTo = jest.fn()

  jest.mock(
    'react-svg',
    () =>
      function Svg () {
        return ''
      }
  )
}
