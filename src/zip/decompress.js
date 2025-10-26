import path from 'path';
import { fileURLToPath } from 'url';
import { createGunzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
const sourceFile = path.join(__dirname, 'files', 'archive.gz');

const decompress = async () => {
  const source = createReadStream(sourceFile);
  const destination = createWriteStream(filePath);
  const gunzip = createGunzip();

  await pipeline(source, gunzip, destination);
};

await decompress();
