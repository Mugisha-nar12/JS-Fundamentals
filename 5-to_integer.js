
const args = process.argv.slice(2);
const firstArg = args[0];
const firstArgInt = parseInt(firstArg);
if (isNaN(firstArgInt)) {
    console.log("Not a number");
} else {
    console.log(`My number: ${firstArgInt}`);
}


