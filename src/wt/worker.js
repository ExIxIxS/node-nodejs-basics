import { parentPort } from 'node:worker_threads';

/*
worker.js - extend given function to work with data received from main thread
            and implement function which sends result of the computation to the main thread
*/

// n should be received from main thread
const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = () => {
  parentPort.on("message", (inputData) => {
    const status = 'resolved';
    parentPort.postMessage({ status, data: nthFibonacci(inputData) });
  });
};

sendResult();
