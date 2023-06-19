import { createWriteStream } from 'node:fs';

/*
write.js - implement function that writes process.stdin
    data into file fileToWrite.txt content using Writable Stream
*/

const FILE_PATH = './src/streams/files/fileToWrite.txt';

const write = async () => {
    const outputStream = createWriteStream(FILE_PATH);

    process.stdin.pipe(outputStream);

    outputStream.on('finish', () => {
      console.log(`Data has been written to ${FILE_PATH}`);
    });

    outputStream.on('error', (err) => {
      throw new Error(`Error writing to file: ${err}`);
    });
};

await write();
