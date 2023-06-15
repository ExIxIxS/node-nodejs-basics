import { readFile } from 'node:fs';
/*
read.js - implement function that prints content of the fileToRead.txt into console
    (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
*/

const TARGET = './src/fs/files/fileToRead.txt';

const read = async () => {
    readFile(TARGET, 'utf8', callback);
};

function callback(err, text) {
    if (err) {
        throw new Error('FS operation failed');
    }

    console.log(text);
}

await read();