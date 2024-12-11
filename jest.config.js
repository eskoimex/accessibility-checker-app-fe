module.exports = {
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    transformIgnorePatterns: [
      "/node_modules/(?!axios)/", // This tells Jest to transform `axios` module as well
    ],
    testEnvironment: 'jsdom',  // This ensures the DOM is available during tests

  };
  