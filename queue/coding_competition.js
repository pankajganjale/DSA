// There is a coding Tournament where 4 clubs are going to compete. Since the team selection is very critical in this competition,Rohit asked Harshit to help him in the team selection process.

// There is a long queue of students from four clubs. Each student of a club have a different roll number. Whenever a new student will come, he will search for his clubmate from the end of the queue. As soon as he will find any of the club-mate in the queue, he will stand behind him, otherwise he will stand at the end of the queue. At any moment Harshit will ask the student, who is standing in front of the queue, to come and give his name and Harshit will remove him from the queue. There are Q operations of one of the following types:

// E a b: A new student of club a whose roll number is b will stand in queue according to the method mentioned above.

// D: Harshit will ask the student, who is standing in front of the queue, to come and put his name and Harshit will remove him from the queue

// Sample Input
// 5
// E 1 1
// E 2 1
// E 1 2
// D
// D

// Sample Output
// 1 1
// 1 2

let find = (arr, ele) => {
  for (let i of arr) {
    if (i == ele) {
      return true;
    }
  }
  return false;
}

function runProgram(input) {
  let inp = input.trim().split("\n");

  let queue = [];
  let q1 = [];
  let q2 = [];
  let q3 = [];
  let q4 = [];

  for (let i = 1; i < inp.length; i++) {
    let arr = inp[i].trim().split(" ");
    
    if (arr[0] == "E") {
      if (arr[1] == 1) {
        if (queue.length === 0) {
          queue.push(arr[1]);
          q1.push(arr[2]);
        } else {
          if (find(queue, 1) == true) {
            q1.push(arr[2]);
          } else {
            queue.push(arr[1]);
            q1.push(arr[2]);
          }
        }
      } else if (arr[1] == 2) {
        if (queue.length === 0) {
          queue.push(arr[1]);
          q2.push(arr[2]);
        } else {
          if (find(queue, 2) == true) {
            q2.push(arr[2]);
          } else {
            queue.push(arr[1]);
            q2.push(arr[2]);
          }
        }
      }
      else if (arr[1] == 3) {
        if (queue.length === 0) {
          queue.push(arr[1]);
          q3.push(arr[2]);
        } else {
          if (find(queue, 3) == true) {
            q3.push(arr[2]);
          } else {
            queue.push(arr[1]);
            q3.push(arr[2]);
          }
        }
      } else {
        if (queue.length === 0) {
          queue.push(arr[1]);
          q4.push(arr[2]);
        } else {
          if (find(queue, 4) == true) {
            q4.push(arr[2]);
          } else {
            queue.push(arr[1]);
            q4.push(arr[2]);
          }
        }
      }
    } else {
      if (queue[0] == 1) {
        console.log(`${1} ${q1[0]}`);
        q1.shift();
        if (q1.length == 0) {
          queue.shift();
        }
      } else if (queue[0] == 2) {
        console.log(`${2} ${q2[0]}`);
        q2.shift();
        if (q2.length == 0) {
          queue.shift();
        }
      } else if (queue[0] == 3) {
        console.log(`${3} ${q3[0]}`);
        q3.shift();
        if (q3.length == 0) {
          queue.shift();
        }
      } else {
        console.log(`${4} ${q4[0]}`);
        q4.shift();
        if (q4.length == 0) {
          queue.shift();
        }
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
