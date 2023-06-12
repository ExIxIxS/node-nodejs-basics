import { open, close, appendFile } from 'node:fs';

function closeFd(fd) {
  close(fd, (err) => {
    if (err) throw err;
  });
}

const create = async () => {
    open('./src/fs/files/fresh.txt', 'wx', (err, fd) => {
        if (err) {
            if (err.code === 'EEXIST') {
                throw new Error('FS operation failed');
            }
        }

        try {
            appendFile(fd, 'I am fresh and young', 'utf8', (err) => {
            if (err) throw err;
            });
        } catch(err) {
            throw err;
        } finally {
            closeFd(fd);
        }
    });

};

await create();
