let find = (arr, k) => {
    let dp = [];
    for (let i = 0; i < arr.length+1; i++) {
        dp[i] = [];
        for (let j = 0; j < k+1; j++) {
            if (i === 0) {
                dp[i][j] = false;
            }
            if (j === 0) {
                dp[i][j] = true;
            }
        }
    }

    for (let i = 1; i < arr.length+1; i++) {
        for (let j = 1; j < k+1; j++) {
            if (arr[i-1] <= j) {
                dp[i][j] = dp[i][j-arr[i-1]] || dp[i-1][j]
            } else {
                dp[i][j] = dp[i-1][j]
            }
        }
    }


    return dp;
}

function runProgram(input) {
    input = input.trim().split("\n");
    let k = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    // let dp = 
    console.log(find(arr, k));
}

if (process.env.USERNAME === 'panka') {
runProgram(`6
2 3 7 8 10`);
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


