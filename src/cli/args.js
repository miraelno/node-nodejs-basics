const parseArgs = () => {
  const raw = process.argv.slice(2);
  const parts = [];

  for (let i = 0; i < raw.length; i++) {
    const arg = raw[i];
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const next = raw[i + 1];
      const value = next && !next.startsWith('--') ? raw[++i] : '';
      parts.push(`${key} is ${value}`);
    }
  }

  if (parts.length) console.log(parts.join(', '));
};

parseArgs();
