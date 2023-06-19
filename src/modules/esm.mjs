import path from 'node:path';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import { fileURLToPath, resolve } from 'node:url';
import './files/c.js';

/*
You should refactor file (you can add additional imports if needed)
cjsToEsm.cjs - rewrite it to it's equivalent in ECMAScript notation (and rename it to esm.mjs)
*/

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const currentDirPath = path.dirname(currentFilePath);

const random = Math.random();

let response;
/*
if (random > 0.5) {
    const filePath = resolve('./files/a.json');
    response = await fetch(filePath);
} else {
    const filePath = resolve('./files/b.json');
    response = await fetch(filePath);
}
*/
//const unknownObject = await response.json();

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${currentFilePath}`);
console.log(`Path to current directory is ${currentDirPath}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

//console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    //unknownObject,
    myServer,
};

