import { rename as fsRename, existsSync } from 'node:fs';

/*
rename.js - implement function that renames file wrongFilename.txt to properFilename with extension .md
    (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
*/

const SOURCE = './src/fs/files/wrongFilename.txt';
const TARGET = './src/fs/files/properFilename.md';

const rename = async () => {
    const isTargetExists = existsSync(TARGET);

    if (isTargetExists) {
        throw new Error('FS operation failed');
    }

    fsRename(SOURCE, TARGET, renameCallback);
};

function renameCallback(err) {
    if (err) {
        throw new Error('FS operation failed');
    };
}

await rename();