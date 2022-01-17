const find = (arr1, arr2) => {
    if (arr1[0] > arr2[0]) {
        return "False";
    } else if (arr1[0] < arr2[0]) {
        return "True";
    } else {
        if (arr1[1] > arr2[1]) {
            return "False";
        } else if (arr1[1] < arr2[1]) {
            return "True";
        } else {
            if (arr1[2] > arr2[2]) {
                return "False";
            } else {
                return "True";
            }
        }
    }
};

function runProgram(input) {
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;
    for (let i = 0; i < test; i++) {
        let arr1 = input[line++].trim().split(".").map(Number);
        let arr2 = input[line++].trim().split(".").map(Number);
        console.log(find(arr1, arr2));
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


