import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  bail: true,
  testEnvironment: 'node',
  testPathIgnorePatterns: [".d.ts", ".js"],
  forceExit: true,
  testMatch: ["./**/*/*.spec.ts"],
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.ts"
  ],
};

export default config;
