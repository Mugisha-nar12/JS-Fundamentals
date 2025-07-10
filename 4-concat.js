// JS-Fundamentals/4-concat.js
// This script concatenates two command line arguments and prints them.
// If no arguments are provided, it will print "No arguments".
// Usage: node concat.js arg1 arg2
const args = process.argv.slice(2);
if (args.length < 2) {
    console.log("No arguments");
}
else if (args.length === 2) {
    const firstArg = args[0];
    const secondArg = args[1];
    console.log(`${firstArg} is  ${secondArg}`);
}
else if (args.length > 2) {
    const firstArg = args[0];
    const secondArg = args[1];
    console.log(`${firstArg} is  ${secondArg}`);
}
else if (args.length === 1) {
    const firstArg = args[0];
    console.log(`${firstArg} is concatenated with nothing`);
}
else {
    console.log("No arguments");
}
