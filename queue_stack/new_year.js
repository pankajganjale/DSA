// Query types:

// 1 X : Number X enter the Queue.

// 2 X : Number X enter the Stack.

// 3: Output whoever is in-front of the queue.

// 4: Output whoever is on-top of the stack

// 5: Which person is in-front of queue get out of queue and enters the stack.

// Note: If the Queue or Stack is empty then output "-1"

function runProgram(input) {
    let inp = input.trim().split("\n");

    let s = [];
    let q = [];

    let isEmpty = (ele) => {
        return ele.length === 0;
    }

    for (let i = 1; i < inp.length; i++) {
        let arr = inp[i].trim().split(" ").map(Number);

        if (arr[0] === 1) {
            q.push(arr[1]);
        } else if (arr[0] === 2) {
            s.push(arr[1]);
        } else if (arr[0] === 3) {
            if (isEmpty(q)) {
                console.log(-1);
            } else {
                console.log(q[0]);
            }
        } else if (arr[0] === 4) {
            if (isEmpty(s)) {
                console.log(-1);
            } else {
                console.log(s[s.length-1]);
            }
        } else if (arr[0] === 5) {
            let dummy = q.shift();
            s.push(dummy);
        }
    }
}

if (process.env.USERNAME === 'panka') {
runProgram(`7
1 4
2 3
1 2
3
4
5
4`);
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
