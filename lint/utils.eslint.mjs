import path from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';

export const gitignorePath = path.resolve('.', '.gitignore');

export const gitIgnoreFile = includeIgnoreFile(gitignorePath);
