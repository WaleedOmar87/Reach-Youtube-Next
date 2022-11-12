const nextJest = require("next/jest");
const createJestConfig = nextJest({
	dir: "./",
});
const { pathsToModuleNameMapper } = require("ts-jest");
const baseUrl = ".";
const paths = {
	"@/utils/*": ["utils/*"],
	"@/components/*": ["components/*"],
	"@/types/*": ["types/*"],
	"@/config/*": ["config/*"],
	"@/styles/*": ["styles/*"],
	"@/store/*": ["store/*"],
	"@/hooks/*": ["hooks/*"],
};

// Add any custom config to be passed to Jest
const customJestConfig = {
	roots: ["<rootDir>"],
	modulePaths: [baseUrl],
	moduleNameMapper: pathsToModuleNameMapper(paths),
	moduleDirectories: ["node_modules", "<rootDir>/"],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
