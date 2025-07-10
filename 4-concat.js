
const args = process.argv.slice(2);
const firstArg = args[0];
const secondArg = args[1];
function printArguments() {
    if (firstArg && secondArg) {
        console.log(`${firstArg} is ${secondArg}`);
    } else if (firstArg) {
        console.log(`${firstArg} is `);
    } else if (secondArg) {
        console.log(` is ${secondArg}`);
    } else {
        console.log("No arguments");
    }
}
printArguments();
