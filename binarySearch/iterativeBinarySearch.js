let sortArr = (arr, n) => {
    if (n === 1) return arr;
    let flag = false;
    for (let i = 0; i < n-1; i++) {
        if (arr[i] > arr[i+1]) {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            flag = true;
        }
    }
    if (!flag) {
        return arr;
    } else {
        return sortArr(arr, n-1);
    }
};

let find = (n, k, arr) => {
    let l = 0;
    let h = n-1;
    let res = -1;
    while (l <= h) {
        let mid = Math.floor(l + ((h-l)/2));
        if (arr[mid] === k) {
            return true;
        } else if (k > arr[mid]) {
            l = mid + 1;
        } else {
            h = mid - 1;
        }
    }
    return false;
};

function runProgram(input) {
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    sortArr(arr, n);
    if (find(n, k, arr) === true) {
        console.log(1);
    } else {
        console.log(-1);
    }
}

if (process.env.USERNAME === 'panka') {
runProgram(`7 10
1 2 10 10 10 11 12`);
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


