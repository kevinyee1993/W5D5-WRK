

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numLeft, completionCallback) {
  if (numLeft <= 0) {
    reader.close();
     return ;
  }

  reader.question("What is your num?", function (sum1) {
    sum += parseInt(sum1);
    // numLeft--;
    completionCallback(sum);
    console.log(numLeft);
    // reader.close();

    addNumbers(sum,  numLeft-1, completionCallback);
});

}

addNumbers(0,3, sum => console.log(`Total Sum: ${sum}`));

// function(sum1) {
//    console.log(`Total Sum: ${sum1}`);
// }
