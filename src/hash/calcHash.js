import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

/*
calcHash.js - implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and logs it into console as hex
*/

const FILE_PATH = './src/hash/files/fileToCalculateHashFor.txt';

const calculateHash = async () => {
    const hash = createHash('sha256');
    const input = createReadStream(FILE_PATH);

    return new Promise((resolve, reject) => {
      input.on('readable', () => {
        const data = input.read();
        if (data)
          hash.update(data);
        else {
          const fileHash = hash.digest('hex');
          console.log(fileHash);
          resolve(fileHash);
        }
      });

      input.on('error', (err) => {
        reject(err);
      });
    });
};

await calculateHash();
