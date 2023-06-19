import { Worker } from 'node:worker_threads';

/*
main.js - implement function that creates number of worker threads (equal to the number of host machine logical CPU cores) from file worker.js
        and able to send data to those threads and to receive result of the computation from them.
        You should send incremental number starting from 10 to each worker.
        For example: on host machine with 4 cores you should create 4 workers and send 10 to first worker,
        11 to second worker, 12 to third worker, 13 to fourth worker.
        After all workers will finish, function should log array of results into console. The results are array of objects with 2 properties:
        status - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker
        data - value from worker in case of success or null in case of error in worker
        The results in the array must be in the same order that the workers were created
*/

const LOGICAL_CPU_CORES = 4; // Replace with the actual number of logical CPU cores on the host machine

const createWorker = () => {
  const worker = new Worker('./src/wt/worker.js');
  return worker;
};

const performCalculations = async () => {
  const logicalCPUCores = LOGICAL_CPU_CORES;

  const workers = [];
  const results = [];

  for (let i = 0; i < logicalCPUCores; i++) {
    const worker = createWorker();
    workers.push(worker);

    const inputData = 10 + i;
    worker.postMessage(inputData);

    worker.on('message', (result) => {
      const { status, data } = result;
      results[i] = { status, data };

      if (results.filter(Boolean).length === logicalCPUCores) {
        console.log(results);
        process.exit();
      }
    });
  }
};

performCalculations();
