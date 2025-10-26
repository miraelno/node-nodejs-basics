import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const writableStream = fs.createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'), {
    encoding: 'utf-8',
  });
  process.stdin.pipe(writableStream);
};

await write();
