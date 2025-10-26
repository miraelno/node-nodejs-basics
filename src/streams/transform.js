import { Transform } from 'node:stream';

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, _, callback) {
      const input = chunk.toString();
      const reversed = input.split('').reverse().join('');
      callback(null, reversed);
    },
  });

  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
