import path from 'node:path';
import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import prettier from 'eslint-config-prettier';
import sonarjs from 'eslint-plugin-sonarjs';
import { defineConfig, includeIgnoreFile } from 'eslint/config';
import globals from 'globals';
import ts from 'typescript-eslint';

const gitignorePath = path.resolve(import.meta.dirname, '.gitignore');

export default defineConfig(
	includeIgnoreFile(gitignorePath),
	{ ignores: ['public/**'] },
	js.configs.recommended,
	ts.configs.recommended,
	...astro.configs.recommended,
	// Sonar-style code smells (cognitive complexity, duplicated branches,
	// collapsible ifs...) linted locally, no SonarCloud needed.
	sonarjs.configs.recommended,
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
		rules: {
			// typescript-eslint recommends not to use no-undef on TS projects.
			'no-undef': 'off',
			// Allow _-prefixed params/vars as intentional "unused" markers.
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_'
				}
			]
		}
	},
	{
		rules: {
			'sonarjs/cognitive-complexity': ['error', 25]
		}
	},
	prettier
);
