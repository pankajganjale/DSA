let find = (values, items, w, n) => {
    if (w === 0 || n === 0) return 0;
    if (items[n-1] <= w) {
        return Math.max(values[n-1] + find(values, items, w-items[n-1], n-1), find(values, items, w, n-1));
    } else {
        return find(values, items, w, n-1);
    }
};

function runProgram(input) {
    input = input.trim().split("\n");
    let w = +input[0];
    let n = +input[1];
    let values = input[2].trim().split(" ").map(Number);
    let items = input[3].trim().split(" ").map(Number);
    console.log(find(values, items, w, n));
}

if (process.env.USERNAME === 'panka') {
runProgram(`50 
3
60 100 120 
10 20 30`);
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


