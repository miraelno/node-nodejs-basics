import { FsOperationError } from './errors.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceFolder = path.resolve('src', 'fs', 'files');
const destinationFolder = path.join(__dirname, 'files_copy');

const copy = async () => {
  try {
    await fs.access(destinationFolder);
    throw new FsOperationError();
  } catch (err) {
    if (err && err.code === 'ENOENT') {
      await fs.cp(sourceFolder, destinationFolder, { recursive: true });
      return;
    }
    throw err;
  }

};

await copy();
