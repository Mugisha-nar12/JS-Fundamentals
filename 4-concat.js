const args = process.argv.slice(2);

function printArguments([firstArg, secondArg]) {
    if (!firstArg) {
        console.log(" ");
    } else if (!secondArg) {
        console.log(`${firstArg}`);
    } else {
        console.log(`${firstArg} is ${secondArg}`);
    }
}

printArguments(args);
