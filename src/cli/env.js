
/*
env.js - implement function that parses environment variables with prefix RSS_
    and prints them to the console in the format RSS_name1=value1; RSS_name2=value2
*/

const PREFIX = 'RSS_';

const parseEnv = () => {
    Object
        .entries(process.env)
        .filter(([key, _]) => key.slice(0, PREFIX.length) === PREFIX)
        .forEach(([key, value]) => console.log(`${key}=${value}`));
};

parseEnv();
