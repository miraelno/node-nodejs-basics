import { FsOperationError } from './errors.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToRemove = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await fs.rm(fileToRemove);
  } catch (err) {
    if (err && err.code === 'ENOENT') {
      throw new FsOperationError();
    }
  }
};

await remove();
