const find = (n1, n2, arr1, arr2) => {
    let i = 0;
    let j = 0;
    let out = [];
    while (i < n1 && j < n2) {
        if (arr1[i] === arr2[j]) {
            out.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] > arr2[j]) {
            j++;
        } else {
            i++;
        }
    }
    if (out.length === 0) return "-1";
    return out.join(" ");
};

function runProgram(input) {
    input = input.trim().split("\n");
    const test = +input[0];
    let line = 1;
    for (let i = 0; i < test; i++) {
        const n1 = +input[line++];
        const arr1 = input[line++].trim().split(" ").map(Number);
        const n2 = +input[line++];
        const arr2 = input[line++].trim().split(" ").map(Number);
        console.log(find(n1, n2, arr1, arr2));
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


