// There is a long waiting line of integers waiting for their turn to buy ticket for a cricket match.

// There are N operations that can be performed on this line. The operations are of following type:

// E x : Integer x enters the queue (For such operation, print the new length of the queue.)

// D: The integer at front buys ticket and leaves the queue (For such operations, print the element that left the queue and the new size of the queue separated by space. If there is no element in the queue then print -1 in place of deleted element.)

function runProgram(input) {
    let inp = input.trim().split("\n");
    let test = Number(inp[0]);

    let q = [];

    for (let i = 1; i < inp.length; i++) {
        let arr = inp[i].trim().split(" ");

        if (arr[0] === "E") {
            q.push(Number(arr[1]));
            console.log(`${q.length}`);
        } else if (arr[0] === "D") {
            let len = q.length;
            if (len === 0) {
                console.log(`${-1} ${0}`);
            } else {
                let removed = q.shift();
                console.log(`${removed} ${q.length}`);
            }
        }
    }
}

if (process.env.USERNAME === 'panka') {
runProgram(`5
E 2
D
D
E 3
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
