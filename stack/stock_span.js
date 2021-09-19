let find = (arr) => {
  try {
    let output = [];
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
      if (stack.length === 0) {
        output.push(1);
      } else if (stack.length > 0 && stack[stack.length - 1][0] > arr[i]) {
        output.push(i - stack[stack.length - 1][1]);
      } else if (stack.length > 0 && stack[stack.length - 1][0] <= arr[i]) {
        while (stack.length > 0 && stack[stack.length - 1][0] <= arr[i]) {
          stack.pop()
        }
        if (stack.length === 0) {
          output.push(i+1);
        } else {
          output.push(i - stack[stack.length - 1][1]);
        }
      }
      stack.push([arr[i], i]);
    }

    return output.join(" ");
  } catch (error) {
    return error;
  }
}

function runProgram(input) {
  let inp = input.trim().split("\n");

  for (let i = 2; i < inp.length; i += 2) {
    let arr = inp[i].trim().split(" ").map(Number);
    console.log(find(arr));
  }
}

if (process.env.USERNAME === 'panka') {
runProgram(`2
7
100 80 60 70 60 75 85
5
3 5 0 9 8`);
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
