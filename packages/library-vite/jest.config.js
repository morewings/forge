import hq from 'alias-hq';
/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    coverageReporters: ['cobertura', 'text'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/index.{ts,tsx}'],
    moduleNameMapper: {
        ...hq.get('jest'),
        '\\.module\\.css$': 'identity-obj-proxy',
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$':
            'jest-transform-stub'
    }
};
