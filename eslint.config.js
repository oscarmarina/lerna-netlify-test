import pluginJs from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: [
      '**/.idea',
      '**/.tmp',
      '**/.vscode',
      '**/.wireit',
      '**/_site',
      '**/build',
      '**/coverage',
      '**/dev',
      '**/dist',
      '**/reports',
      '**/storybook-static',
      '**/*screenshots*',
      '**/*snapshots*',
      '**/*.config.*',
      '**/*.d.ts',
      '**/*.min.js',
      '**/*.workspace.*',
    ],
  },
  {languageOptions: {globals: globals.browser}},
  pluginJs.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
];
