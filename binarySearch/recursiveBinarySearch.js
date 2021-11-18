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

let find = (n, k, arr, l, h) => {
    if (l > h) return false;
    let mid = Math.floor(l + ((h-l)/2));
    if (arr[mid] === k) return true;
    if (k < arr[mid]) {
        return find(n, k, arr, l, mid-1);
    } else {
        return find(n, k, arr, mid+1, h);
    }
};

function runProgram(input) {
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    sortArr(arr, n);
    if (find(n, k, arr, 0, n-1) === true) {
        console.log(1);
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


