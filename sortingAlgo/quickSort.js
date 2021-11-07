const partition = (arr, lo, hi) => {
    let i = lo;
    let j = hi;
    let piv = arr[hi];
    while (i < j) {
        while (arr[j] >= piv && j > 0) {
            j--;
        }
        while (arr[i] < piv && i < hi) {
            i++;
        }
        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp1 = arr[i];
    arr[i] = arr[hi];
    arr[hi] = temp1;
    return i;
};

const quickSort = (arr, lo, hi) => {
  if (lo < hi) {
      let index = partition(arr, lo, hi);
      quickSort(arr, lo, index-1);
      quickSort(arr, index+1, hi);
  }  
  return arr;
};

function runProgram(input) {
    input = input.trim().split("\n");
    let arr = input[1].trim().split(" ").map(Number);
    let lo = 0;
    let hi = arr.length - 1;
    console.log(quickSort(arr, lo, hi).join(" "));
}

if (process.env.USERNAME === 'panka') {
  runProgram();
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}


