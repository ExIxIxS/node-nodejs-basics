import { rm } from 'node:fs';

/*
delete.js - implement function that deletes file fileToRemove.txt
    (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)
*/

const TARGET = './src/fs/files/fileToRemove.txt';

const remove = async () => {
    rm(TARGET, callback)
};

function callback(err) {
    if (err) {
        throw new Error('FS operation failed');
    };
}

await remove();