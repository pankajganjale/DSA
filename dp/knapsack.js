let find = (values, items, w, n, empty) => {
    if (w === 0 || n === 0) return 0;
    if (empty[n][w] !== -1) return empty[n][w];
    if (items[n-1] <= w) {
        return empty[n][w] = Math.max(values[n-1] + find(values, items, w-items[n-1], n-1, empty), find(values, items, w, n-1, empty));
    } else {
        return empty[n][w] = find(values, items, w, n-1, empty);
    }
};

function runProgram(input) {
    input = input.trim().split("\n");
    let w = +input[0];
    let n = +input[1];
    let values = input[2].trim().split(" ").map(Number);
    let items = input[3].trim().split(" ").map(Number);
    let empty = Array(n+1).fill(Array(w+1).fill(-1));
    console.log(find(values, items, w, n, empty));
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


