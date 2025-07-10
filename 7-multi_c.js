const args = process.argv.slice(2);

function printCIsFun(times) {
    const count = parseInt(times, 10);
    if (isNaN(count)) {
        console.log("Missing number of occurrences");
        return;
    }

    let output = "";
    for (let i = 0; i < count; i++) {
        output += "C is fun";
        if (i !== count - 1) output += "\n";
    }
    console.log(output);
}

printCIsFun(args[0]);

/**
 * Prints "C is fun" x times, where x is the first argument converted to an integer.
 * If the first argument is missing or not a valid integer, prints "Missing number of occurrences".
 * Uses only two console.log calls and a loop.
 */
