module.exports = {
    testEnvironment: 'jsdom',
    preset: 'ts-jest/presets/js-with-ts',
    globals: {
        'ts-jest': {
            isolatedModules: true,
            diagnostics: true
        }
    },
    testRegex: '(test|spec)\.[jt]sx?$',
    verbose: true,
    reporters: ['default'],
    coverageThreshold: {
        global: {
            'branches': 80,
            'functions': 80,
            'lines': 80,
            'statements': 80
        }
    },
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!<rootDir>/src/**/*.styles.{js,ts}',
        '!<rootDir>/src/**/*.theme.{js,ts}',
        '!<rootDir>/src/parts/index.js',
        '!<rootDir>/src/context/index.js',
        '!<rootDir>/**/*.config.{js,ts}',
    ]
}
