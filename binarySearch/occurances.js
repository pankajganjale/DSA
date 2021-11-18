let find = (arr, n, k, l, h, bound) => {
    if (l > h) return;
    let mid = Math.floor(l + ((h - l)/2));
    if (arr[mid] === k) bound.push(mid);
    if (arr[mid] <= k) {
        find(arr, n, k, mid+1, h, bound);
    } 
    if (arr[mid] >= k) { 
        find(arr, n, k, l, mid-1, bound);
    }
};

function runProgram(input) {
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    let bound = [];
    find(arr, n, k, 0, n-1, bound);
    console.log(bound.length);
        
    
    
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


