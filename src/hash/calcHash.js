import { fileURLToPath } from 'url';
import fs from 'fs';
import { createHash } from 'crypto';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const calculateHash = async () => {
  const readableStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
  const hash = createHash('sha256');
  readableStream.pipe(hash).setEncoding('hex').pipe(process.stdout);
};

await calculateHash();
