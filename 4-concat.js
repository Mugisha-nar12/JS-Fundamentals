const args = process.argv.slice(2);

const firstArg = process.argv[2];
const secondArg = process.argv[3];

console.log(`${firstArg} is ${secondArg}`);
function printArguments([firstArg, secondArg]) {
    if (!firstArg) {
        console.log(" ");
    } else if (!secondArg) {
        console.log(`${firstArg}`.toUpperCase());
    } else {
        console.log(`${firstArg} is ${secondArg}`);
    }
}

printArguments(args);
