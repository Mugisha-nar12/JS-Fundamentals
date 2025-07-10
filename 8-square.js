const args = process.argv.slice(2);

function printSquare(sizeArg) {
    const size = parseInt(sizeArg, 10);
    if (isNaN(size)) {
        console.log("Missing size");
        return;
    }

    const line = "X".repeat(size);
    for (let i = 0; i < size; i++) {
        console.log(line);
    }
}

printSquare(args[0]);
