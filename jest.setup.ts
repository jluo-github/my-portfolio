import "@testing-library/jest-dom";

// mock the IntersectionObserver API
global.IntersectionObserver = class {
  root: Element | null = null;
  rootMargin: string = '';
  thresholds: ReadonlyArray<number> = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
};
