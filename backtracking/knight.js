let chess = [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0]];

let find = (i, j, n) => {
  if (i < 0 || i > 9 || j < 0 || j > 9) return;
  if (n === 0) {
      chess[i][j] = 1;
      return;
  }
  find(i-2, j-1, n-1);
  find(i-2, j+1, n-1);
  find(i-1, j+2, n-1);
  find(i-1, j-2, n-1);
  find(i+1, j+2, n-1);
  find(i+1, j-2, n-1);
  find(i+2, j-1, n-1);
  find(i+2, j+1, n-1);
};

function runProgram(input) {
    let arr = input.trim().split(" ").map(Number);
    let i = arr[0];
    let j = arr[1];
    let k = arr[2];
    find(i-1, j-1, k);
    let count = 0;
    for (let z = 0; z < chess.length; z++) {
        for (let y = 0; y < chess[z].length; y++) {
            if (chess[z][y] === 1) count++;
        }
    }
    console.log(count);
    
}

if (process.env.USERNAME === 'panka') {
runProgram(`3 3 1`);
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


