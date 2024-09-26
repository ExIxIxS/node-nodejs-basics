
/*
args.js - implement function that parses command line arguments (given in format --propName value --prop2Name value2, you don't need to validate it)
    and prints them to the console in the format propName is value, prop2Name is value2
*/

const parseArgs = () => {
    const commandLineArgs = process.argv.slice(2);
    const joindedArgs = [];

    for (let i = 0; i < commandLineArgs.length; i = i + 2) {
        const arg = [commandLineArgs[i].slice(2), commandLineArgs[i + 1]];

        joindedArgs.push(arg);
    }

    joindedArgs.forEach(([key, value]) => console.log(`${key} is ${value}`));
};

parseArgs();