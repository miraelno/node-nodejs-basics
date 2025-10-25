import { FsOperationError } from './errors.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesDir = path.join(__dirname, 'files');

const list = async () => {
  try {
    console.log(await fs.readdir(filesDir));
  } catch (err) {
    throw new FsOperationError();
  }
};

await list();
