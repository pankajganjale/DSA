// You are given n different numbers and an integer k. Write a program that finds lower bound of k in log(n) time complexity. Lower bound of a number k in a sorted list is the index of the first number which is same as k, in case the number is not present, print -1 (here the answer is given considering index to be starting from 0)

let find = (arr, n, k, l, h, bound) => {
    if (l > h) return;
    let mid = Math.floor(l + ((h - l)/2));
    if (arr[mid] === k) {
        bound.push(mid);
        return find(arr, n, k, l, mid-1, bound);
    } else if (arr[mid] > k) {
        return find(arr, n, k, l, mid-1, bound);
    } else {
        return find(arr, n, k, mid+1, h, bound);
    }
};

function runProgram(input) {
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    let bound = [];
    find(arr, n, k, 0, n-1, bound);
    if (bound.length > 0) {
        bound.sort((a, b) => a-b);
        console.log(bound[0]);
    } else {
        console.log(-1);
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


