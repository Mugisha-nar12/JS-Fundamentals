// const args = process.argv.slice(2);

// function printCIsFun(times) {
//     const count = parseInt(times, 10);
//     if (isNaN(count)) {
//         console.log("Missing number of occurrences");
//         return;
//     }

//     let output = "";
//     for (let i = 0; i < count; i++) {
//         output += "C is fun";
//         if (i !== count - 1) output += "\n";
//     }
//     console.log(output);
// }

// printCIsFun(args[0]);


const x = parseInt(process.argv[2]);
let output = "";

if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < x; i++) {
    output += "C is fun\n";
  }
  console.log(output.trim());
}