module.exports = {
    runner: 'jest-runner',
    verbose: true,
    clearMocks: true,
    errorOnDeprecated: true,
    moduleFileExtensions: ['js', 'jsx'],
    setupFilesAfterEnv: ["<rootDir>/enzyme.config.js"]
};