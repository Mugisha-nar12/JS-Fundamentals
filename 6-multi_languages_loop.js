// const languages = ["C is fun", "Python is cool", "JavaScript is amazing"];
// let i=0;
// while(i< languages.length){
//     console.log(languages[i]);
//     i++;
// }



const lines = ["C is fun", "Python is cool", "JavaScript is amazing"];
let output = "";
for (const line of lines) {
  output += line + "\n";
}
console.log(output.trim());
