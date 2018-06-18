import StorageMock from './Tests/test-utils/StorageMock'

global.localStorage = StorageMock
window.localStorage = StorageMock

Object.defineProperty(window, "matchMedia", {
    value: jest.fn(() => { return { matches: true } })
});