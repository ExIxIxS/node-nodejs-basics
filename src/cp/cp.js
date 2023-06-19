import { spawn } from 'child_process';

/*
cp.js - implement function spawnChildProcess that receives array of arguments args and creates child process from file script.js,
        passing these args to it. This function should create IPC-channel between stdin and stdout of master process and child process:
        child process stdin should receive input from master process stdin
        child process stdout should send data to master process stdout
*/

const CHILD_PATH = './src/cp/files/script.js';

const spawnChildProcess = async (args) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn('node', [CHILD_PATH, ...args]);
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

    childProcess.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Child process exited with code ${code}`));
      }
    });
  });
};

const testArr = [1, 2, 3, 'Go!!!'] // Put your arguments to test this functionality

spawnChildProcess(testArr);
