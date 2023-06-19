import { createReadStream } from 'node:fs';

/*
read.js - implement function that reads file fileToRead.txt
    content using Readable Stream and prints it's content into process.stdout
*/

const FILE_PATH = './src/streams/files/fileToRead.txt';

const read = async () => {
    const stream = createReadStream(FILE_PATH);

    stream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    stream.on('error', (err) => {
        throw new Error(`Error reading file: ${err}`);
    });
};

await read();
