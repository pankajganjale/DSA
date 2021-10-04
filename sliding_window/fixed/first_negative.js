function runProgram(input) {
    var input = input.trim().split("\n");
    let k = +input[0];
    let arr = input[1].trim().split(" ").map(Number);

    let output = [];
    let negatives = [];
    let i = 0;
    let j = 0;
    let pointer = 0;

    while (j < arr.length) {
        if (arr[j] < 0) {
            negatives.push(arr[j]);
        }
        if (j-i+1 < k) {
            j++;
        } else if (j-i+1 === k) {
            if (negatives.length - pointer === 0) {
                output.push(0);
            } else {
                output.push(negatives[pointer]);
            }
            if (arr[i] === negatives[pointer]) {
                pointer++;
            }
            i++;
            j++;
        }
    }
    console.log(output);
}

if (process.env.USERNAME === 'panka') {
runProgram(`3
12 -1 -7 8 -15 30 16 28`);
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
