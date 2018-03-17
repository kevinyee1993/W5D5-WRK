const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`Is ${el1} > ${el2}?`, function (answer) {

    // reader.close();
    return callback( answer === 'yes' );
    // return answer === 'yes';
  });

}

function cb(ans){
  console.log(ans);
  return ans;
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
  // for (i = 0 ; i < arr.length-1; i++) {
  if (i === arr.length -1) {
    outerBubbleSortLoop(madeAnySwaps);
    return;
  }

    let current = arr[i];
    let next = arr[i+1];

    // let isGreater = askIfGreaterThan(current, next, cb);
    // debugger;

    // console.log(isGreater);


    if (askIfGreaterThan(current, next, cb)) {
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] =  temp;
      madeAnySwaps = true;
    }
  // }
  innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);


}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {

  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.

    if(madeAnySwaps){
      let truth = false;
      //CAN WE JUST PASS IN NAME OF FXN WITHOUT ANY PARAMETERS!?
      innerBubbleSortLoop(arr, 0, truth, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }


    // while(madeAnySwaps){
    //   console.log("hello");
    //   let truth = false;
    //   innerBubbleSortLoop(arr, 0, truth, outerBubbleSortLoop);
    //   madeAnySwaps = false;
    // }
  }



  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true);
}

askIfGreaterThan(1, 2, cb);

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });
