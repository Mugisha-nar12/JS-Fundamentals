//Write a script that prints the first argument passed to it:

const args = process.argv.slice(2);
const firstArg = args[0];
function printFirstArgument() {
    if (firstArg) {
        console.log(firstArg);
    } else {
        console.log("No argument");
    }
}
printFirstArgument();
