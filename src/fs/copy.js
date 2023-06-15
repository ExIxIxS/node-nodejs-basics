import { existsSync, cp } from 'node:fs';
import path from 'node:path';

/*
copy.js - implement function that copies folder files files with all its content into folder files_copy at the same level
    (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)
*/

const SOURSE_PATH = './src/fs/files';
const TARGET_PATH = './src/fs/files_copy';
const absoluteSourcePath = path.resolve(SOURSE_PATH);
const absoluteDestinationPath = path.resolve(TARGET_PATH);

const copy = async () => {
    const isSourseExists = existsSync(SOURSE_PATH);
    const isTargetExists = existsSync(TARGET_PATH);

    if (!isSourseExists || isTargetExists) {
        throw new Error('FS operation failed');
    }


    cp( absoluteSourcePath, absoluteDestinationPath,
        {recursive: true, force: false, errorOnExist: true},
        (err) => {
            if (err) {
                throw new Error('FS operation failed');
            }
        }
    );

};

await copy();
