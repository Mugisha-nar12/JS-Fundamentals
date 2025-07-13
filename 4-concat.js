// const args = process.argv.slice(2);

// function printArguments([firstArg, secondArg]) {
//     if (!firstArg) {
//         console.log(" ");
//     } else if (!secondArg) {
//         console.log(`${firstArg}`.toUpperCase());
//     } else {
//         console.log(`${firstArg} is ${secondArg}`);
//     }
// }

// printArguments(args);


const arg1 = process.argv[2] || "undefined";
const arg2 = process.argv[3] || "undefined";

console.log(`${arg1} is ${arg2}`);