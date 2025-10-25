import fs from 'fs/promises';
import path from 'path';
import { FsOperationError } from './errors.js';


const filePath = path.resolve('src', 'fs', 'files', 'fresh.txt');

const create = async () => {

  try {
    await fs.access(filePath);
    throw new FsOperationError();
  } catch (err) {
    if (err && err.code === 'ENOENT') {
      await fs.mkdir(path.dirname(filePath), { recursive: true });
      await fs.writeFile(filePath, 'I am fresh and young');
      return;
    }
    throw err;
  }
};

await create();
