import { FsOperationError } from './errors.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToRename = path.join(__dirname, 'files', 'wrongFilename.txt');
const renamedFilePath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  try {
    await fs.access(renamedFilePath);
    throw new FsOperationError();
  } catch (err) {
    if (err && err.code === 'ENOENT') {
      try {
        await fs.access(fileToRename);
        await fs.rename(fileToRename, renamedFilePath)
      } catch (err) {
        if (err && err.code === 'ENOENT') {
          throw new FsOperationError();
        }
        throw err;
      }
    } else {
      throw err;
    }
  }

};

await rename();
