
function printTwoArguments(arg1, arg2) {
    if (arg1 && arg2) {
        console.log(`${arg1} is ${arg2}`);
    }
    else if (arg1) {
        console.log(`${arg1} is `);
    }
    else if (arg2) {
        console.log(` is ${arg2}`);
    }
    else {
        console.log("No argument");
    }
}
printTwoArguments(args[0], args[1]);
