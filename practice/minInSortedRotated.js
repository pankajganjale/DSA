const find = (n, arr) => {
    let lo = 0;
    let hi = n-1;
    while (lo < hi) {
        const mid = Math.floor(lo + ((hi - lo) / 2));
        if (arr[mid] > arr[hi]) {
            lo = mid +1;
        } else {
            hi = mid;
        }
    }
    return arr[lo];
}

function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    console.log(find(n, arr));
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


