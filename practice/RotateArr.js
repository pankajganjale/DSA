const rotate = (n, arr) => {
    let k = Math.floor(n/2);
    let count = 0;
    let top = 0;
    let left = 0;
    let right = n-1;
    let bottom = n-1;
    while (count < k) {
        let prev = arr[top+1][left];
        for (let i = left; i <= right; i++) {
            let dummy = arr[top][i];
            arr[top][i] = prev;
            prev = dummy;
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            let dummy = arr[i][right];
            arr[i][right] = prev;
            prev = dummy;
        }
        right--;
        for (let i = right; i >= left; i--) {
            let dummy = arr[bottom][i];
            arr[bottom][i] = prev;
            prev = dummy;
        }
        bottom--;
        for (let i = bottom; i >= top; i--) {
            let dummy = arr[i][left];
            arr[i][left] = prev;
            prev = dummy;
        }
        left++;
        count++;
    }
    return arr
};

function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = [];
    for (let i = 1; i < input.length; i++) {
        let sub = input[i].trim().split(" ").map(Number);
        arr.push(sub);
    }
    let out = rotate(n, arr);
    for (let i = 0; i < out.length; i++) {
        console.log(out[i].join(" "));
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


