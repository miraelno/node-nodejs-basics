import { FsOperationError } from './errors.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');
const read = async () => {
  fs.readFile(fileToRead, 'utf8')
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      throw new FsOperationError();
    });
};

await read();
