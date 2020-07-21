module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  globals: {
    "ts-jest": {
      babelConfig: {
        presets: ["@babel/preset-env"],
        plugins: ["replay-jsx/babel"],
      },
    },
  },
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.ts", "**/__tests__/**/*.test.tsx"],
  transformIgnorePatterns: ["/node_modules/(?!@replay/).+\\.js$"],
};
