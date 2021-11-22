// Given an array of length n, and it is sorted and rotated at some unknown point, find the minimum element in it.

// In a sorted & rotated array,  we rotate an ascending order sorted array at some pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2.

// Please note that the linear search approach with the time complexity of O(n) can easily be applied. But you are expected to solve it in O(log n) time complexity


let find = (n, arr, lo, hi) => {
    if (hi < lo) return arr[0]; 
   if (n === 1) return arr[0];
   let mid = Math.floor(lo + ((hi-lo)/2));
   if (mid < hi && arr[mid+1] < arr[mid]) return arr[mid+1];
   if (lo < mid && arr[mid] < arr[mid-1]) return arr[mid];
   if (arr[mid] < arr[hi]) {
       return find (n, arr, lo, mid-1);
   } else {
       return find (n, arr, mid+1, hi);
   }
};

function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    console.log(find(n, arr, 0, n-1));
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


