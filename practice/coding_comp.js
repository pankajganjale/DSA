function runProgram(input) {
    var input = input.trim().split("\n");
    let q = [];
    let q1 = [];
    let q2 = [];
    let q3 = [];
    let q4 = [];
    for (let i = 1; i < input.length; i++) {
        let arr = input[i].trim().split(" ");
        if (arr[0] === "E") {
            if (arr[1] == 1) {
                if (q1.length === 0) {
                    q.push(arr[1]);
                    q1.push(arr[2]);
                } else {
                    q1.push(arr[2]);
                }
            } else if (arr[1] == 2) {
                if (q2.length === 0) {
                    q.push(arr[1]);
                    q2.push(arr[2]);
                } else {
                    q2.push(arr[2]);
                }
            } else if (arr[1] == 3) {
                if (q3.length === 0) {
                    q.push(arr[1]);
                    q3.push(arr[2]);
                } else {
                    q3.push(arr[2]);
                }
            } else if (arr[1] == 4) {
                if (q4.length === 0) {
                    q.push(arr[1]);
                    q4.push(arr[2]);
                } else {
                    q4.push(arr[2]);
                }
            }
        } else {
            if (q[0] == 1) {
                let a = q1.shift();
                if (q1.length === 0) {
                    q.shift();
                } 
                console.log(`1 ${a}`);
            } else if (q[0] == 2) {
                let a = q2.shift();
                if (q2.length === 0) {
                    q.shift();
                } 
                console.log(`2 ${a}`);
            } else if (q[0] == 3) {
                let a = q3.shift();
                if (q3.length === 0) {
                    q.shift();
                } 
                console.log(`3 ${a}`);
            } else {
                let a = q4.shift();
                if (q4.length === 0) {
                    q.shift();
                } 
                console.log(`4 ${a}`);
            }
        }
    }
}

if (process.env.USERNAME === 'panka') {
runProgram(`5
E 1 1
E 2 1
E 1 2
D
D`);
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

