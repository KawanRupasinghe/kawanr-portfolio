// Vitest + Testing Library setup (no globals)
import * as matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, expect } from "vitest";

// Polyfill window.matchMedia for jsdom (Vitest)
if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,            // default to light mode in tests
    media: query,
    onchange: null,
    addListener: () => {},     // deprecated
    removeListener: () => {},  // deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false
  });
}

// Extend expect with jest-dom matchers (toBeInTheDocument, etc.)
expect.extend(matchers);

// Clean up DOM after each test
afterEach(() => {
  cleanup();
});

// Polyfill IntersectionObserver for jsdom (needed by Header active-on-scroll logic)
if (typeof window !== "undefined" && !('IntersectionObserver' in window)) {
  class MockIntersectionObserver {
    constructor(callback, options) {
      this._callback = callback;
      this._options = options;
    }
    observe() { /* no-op */ }
    unobserve() { /* no-op */ }
    disconnect() { /* no-op */ }
    takeRecords() { return []; }
  }
  window.IntersectionObserver = MockIntersectionObserver;
  global.IntersectionObserver = MockIntersectionObserver;
}
