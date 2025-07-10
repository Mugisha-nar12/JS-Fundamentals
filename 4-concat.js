const args = process.argv.slice(2);
const firstArg = args[0];
const secondArg = args[1];
function printArguments() {
    if (args.length === 0) {
        console.log("No argument");
    } else if (args.length === 1) {
        console.log(`${firstArg}`);
    } else {
        console.log(`${firstArg} is ${secondArg}`);
    }
}
printArguments();
