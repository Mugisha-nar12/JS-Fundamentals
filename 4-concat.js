const args = process.argv.slice(2);

function printArguments([firstArg, secondArg]) {
    if (!firstArg) {
        console.log("0 argument");
    } else if (!secondArg) {
        console.log(firstArg);
    } else {
        console.log(`${firstArg} is ${secondArg}`);
    }
}

printArguments(args);
