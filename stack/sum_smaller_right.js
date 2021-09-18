// Given an array of integers, find the sum of the nearest smaller values to the right of all the elements, if such values dont exist, consider them zero.

function smaller(arr) {
    
    let stack = []
    let output = 0

    for (let i = arr.length-1; i >= 0; i--) {

        if (arr[i] <= stack[stack.length-1] && stack.length > 0) {
            while (arr[i] <= stack[stack.length-1]) {
                stack.pop();
            }
            if (stack.length > 0 && arr[i] > stack[stack.length-1]) {
                output += stack[stack.length-1];
            }
        } else if (arr[i] > stack[stack.length-1]) {
            output += stack[stack.length-1];
        }
        stack.push(arr[i]);
    }

    return output;
}

function runProgram(input) {
    let inp = input.trim().split("\n");
   
    for (let i = 2; i < inp.length; i+=2) {
        let arr = inp[i].trim().split(" ").map(Number);
        console.log(smaller(arr))
    }
}

if (process.env.USERNAME === 'panka') {
runProgram(`2
4
4 3 1 2
4
1 2 3 4`);
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
