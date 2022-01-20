const find = (n) => {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        if (i === 0 || i === 1) {
            arr[i] = i;
        } else {
            arr[i] = arr[i-1] + arr[i-2];
        }
    }
    return arr[arr.length-1];
  };
  
  function runProgram(input) {
      console.log(find(+input));
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
  
  
  