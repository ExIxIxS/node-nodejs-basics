import { readdir } from 'node:fs';

/*
list.js - implement function that prints all array of filenames from files folder into console
    (if files folder doesn't exists Error with message FS operation failed must be thrown)
*/

const SOURCE = './src/fs/files';

const list = async () => {
    readdir(SOURCE, callback)
};

function callback(err, files) {
    if (err) {
        throw new Error('FS operation failed');
    }

    console.log(files);
}

await list();