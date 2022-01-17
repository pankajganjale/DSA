const find = (arr, str) => {
    // let n = +arr.join("");
    
    if (str === "negative") {
        arr.sort((a, b) => b - a);
        arr.unshift("-");
        return +arr.join("");
    }
    
    let zeros = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros++;
        }
    }
    if (zeros === arr.length) return +arr.join("");

    arr.sort((a, b) => a - b);
    let index = 0;
    while (arr[index] === 0) {
        index++;
    }
    let zeroIndex = index;
    // let newIndex = 0
    let compare = arr[index];
    while (compare === arr[index]) {
        index++;
    }
    let output = [...arr.slice(zeroIndex, index), ...arr.slice(0, zeroIndex), ...arr.slice(index)];
    return +output.join("");
}

function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i++) {
        let num = input[i].trim().split("")
        if (num[0] === "-") {
            num.shift();
            console.log(find(num.map(Number), "negative"));
        } else {
            console.log(find(num.map(Number), "positive"));
        }
        
    }
}

if (process.env.USERNAME === 'panka') {
  runProgram(`2
  53334121
  -1002911
  000000
  1520005
  `);
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


