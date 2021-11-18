// You are given an array A of size N, and Q queries to deal with. For each query, you are given an integer X, and you're supposed to find out if X is present in the array A or not.

let bubble = (arr, n) => {
    if (n === 1) return arr;
    let flag = false;
    for (let i = 0; i < n-1; i++) {
        if (arr[i] > arr[i+1]) {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
        flag = true;
    }
    if (flag) return bubble(arr, n-1);
    return arr;
};

let binary = (arr, n, l, h, k) => {
    if (l > h) return "NO";
    let mid = Math.floor(l + ((h-l)/2));
    if (arr[mid] === k) return "YES";
    if (k < arr[mid]) {
        return binary(arr, n, l, mid-1, k);
    } else {
        return binary(arr, n, mid+1, h, k);
    }
};

function runProgram(input) {
    input = input.trim().split("\n");
    let [kN, arrN] = input[0].trim().split(" ").map(Number);
    let k = input[1].trim().split(" ").map(Number);
    k.sort((a, b) => a-b);
    for (let i = 2; i < arrN+2; i++) {
        console.log(binary(k, kN, 0, kN-1, +input[i]));
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


