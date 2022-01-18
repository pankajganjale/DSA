const find = (n, k, arr) => {
    let lo = 0;
    let hi = n-1;
    while (lo <= hi) {
        const mid = Math.floor(lo + ((hi-lo)/2));
        const prev = (mid + n - 1) % n;
        const next = (mid + 1) % n;
        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
            return mid;
        } else if (arr[mid] >= arr[0]) {
            lo = mid + 1;
        } else if (arr[mid] <= arr[arr.length-1]) {
            hi = mid - 1;
        }
    }
};

const binary = (n, k, arr) => {
    let lo = 0;
    let hi = n-1;
    while (lo <= hi) {
        const mid = Math.floor(lo + ((hi-lo)/2));
        if (arr[mid] === k) {
            return mid;
        } else if (arr[mid] > k) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return -1;
};

function runProgram(input) {
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    const index = find(n, k, arr);
    const ans1 = binary(index, k, arr.slice(0, index));
    const ans2 = binary(n-index, k, arr.slice(index, n));
    if (ans1 === -1 && ans2 !== -1) {
        console.log(ans2 + index);
    } else if (ans1 !== -1 && ans2 === -1) {
        console.log(ans1);
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


