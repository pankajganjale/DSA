// You have to make a Queue of people of size K which can process two type of request :

// Type 1 : A person with identity X will enter the queue, if the person can enter the queue output the number X else output -1 in a new line.
// Type 2:  In this type of query you need to process the person who is at the front of queue, if no person is present in the queue output -1 else output the identity of the number.
// The Queries will be of the form :
// 1 X   - Type 1 Query which means this person with identity X is trying to enter the queue

// 2      - Type 2 Query which means you need to process the person in front of the queue

// A person cannot enter a queue if the queue is full, also the front person is removed after being processed (if any)

// Note: Type 1 Query is followed by an integer X which denotes identity of the person. See Hint for better explanation.

function runProgram(input) {
    var input = input.trim().split("\n");
    let inp = input[0].trim().split(" ").map(Number);
    let size = inp[0];
    let q = [];
    let l = 0;
    let r = 0;
    for (let i = 1; i < input.length; i++) {
        let arr = input[i].trim().split(" ").map(Number);
        if (arr[0] === 1) {
            if ((r-l) >= size) {
                console.log(-1);
            } else {
                console.log(arr[1]);
                q[r] = arr[1];
                r++;
            }
        } else {
            if ((r-l) === 0) {
                console.log(-1);
            } else {
                console.log(q[l]);
                l++;
            }
        }
    }
}

if (process.env.USERNAME === 'panka') {
runProgram(`2 6
1 1
1 2
1 3
2
2
2`);
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


