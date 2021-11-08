let bubble = (arr, n) => {
  if (n === 1) return arr;
  for (let i = 0; i < n-1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return bubble(arr, n-1);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0]
  let arr = input[1].trim().split(" ").map(Number);
  console.log(bubble(arr, n).join(" "));
}

if (process.env.USERNAME === 'panka') {
runProgram(`5
3 5 0 9 8`);
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

