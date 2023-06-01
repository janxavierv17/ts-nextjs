// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
// Polyfill "window.fetch" used in the React component.
import "whatwg-fetch";
import "@testing-library/jest-dom/extend-expect";
import { server } from "./mocks/server";

beforeAll(() => server.listen()); // Start handling requests at the beginning of the tests
afterEach(() => server.resetHandlers()); // Reset any runtime handlers after each test
afterAll(() => server.close()); // Stop handling requests after the tests are done
