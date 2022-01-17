const find = (n) => {
    if (n === 0) return 0;
    let count = 0;
    while (n !== 1) {
        if (n % 2 !== 0) {
            count++;
            n = n-1;
        } else {
            n = n / 2;
            count += n;
        }
    }
    return count;
};

function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i++) {
        console.log(find(+input[i]));
    }
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


