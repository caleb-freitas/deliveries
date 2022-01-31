export default {
  collectCoverage: false,
  bail: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  clearMocks: true,
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
};
