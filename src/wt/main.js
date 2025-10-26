import os from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
  const CPU_COUNT = os.cpus().length;
  const tasks = [];
  const results = [];

  for (let i = 0; i < CPU_COUNT; i += 1) {
    const workerPath = new URL('./worker.js', import.meta.url);
    const worker = new Worker(workerPath, { workerData: 10 + i });

    worker.on('message', (result) => {
      results.push({ status: 'resolved', data: result });
    })

    worker.on('error', (error) => {
      console.log(error)
      results.push({ status: 'error', data: null });
    })

    tasks.push(worker);

  }

  await Promise.allSettled(
    tasks.map((worker) => new Promise((res) => worker.on('exit', res)))
  )

  console.log(results);
};

await performCalculations();
