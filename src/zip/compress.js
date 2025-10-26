import path from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceFile = path.join(__dirname, 'files', 'fileToCompress.txt');
const resultZip = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
  const source = createReadStream(sourceFile);
  const destination = createWriteStream(resultZip);
  const gzip = createGzip();

  await pipeline(source, gzip, destination);
};

await compress();
