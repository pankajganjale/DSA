function runProgram(input) {
    var input = input.trim().split("\n");
    let k = +input[0];
    let arr = input[1].trim().split(" ").map(Number);

    let max = 0;
    let sum = 0;
    let i = 0;
    let j = 0;
    
    while (j < arr.length) {
        sum += arr[j];
        if (j-i+1 < k) {
            j++;
        } else if (j-i+1 === k) {
            max = Math.max(max, sum);
            sum -= arr[i];
            i++;
            j++;
        }
    }
    console.log(max)
}

if (process.env.USERNAME === 'panka') {
runProgram(`3
2 5 1 8 2 9 1`);
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
