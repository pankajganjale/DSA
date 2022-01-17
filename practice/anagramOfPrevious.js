function runProgram(input) {
    input = input.trim().split("\n");
    
    let obj = {};
    let output = [];
    
    for (let i = 1; i < input.length; i++) {
        let arr = input[i].split("");
        // console.log(arr)
        arr = arr.sort();
        if (obj[arr] === undefined) {
            obj[arr] = i;
            output.push(input[i]);
        }
    }
    console.log(output.length);
    output.sort();
    for (let i = 0; i < output.length; i++) {
        console.log(output[i]);
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


