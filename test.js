//loops through user input and adds the sum of the numbers entered together

var sum = 0;
for (var c = 2; c < process.argv.length; c++) {
  sum = sum + Number(process.argv[c]);
}

console.log(sum);
