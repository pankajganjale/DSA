const find = (arr) => {
    if (arr[0] === "-") {
        arr = arr.slice(1, arr.length);
        arr.sort((a, b) => b - a);
        return "-"+arr.join("");
    } else {
        let out = [];
        let zeros = 0;
        arr.sort((a, b) => b - a);
        for (let i = arr.length-1; i >= 0; i--) {
            if (arr[i] == 0) {
                zeros++;
                arr.pop();
            } else {
                break;
            }
        }
        let k = arr[arr.length-1];
        arr.pop();
     //   console.log(arr)
       out.push(k);
        for (let i = 0; i < zeros; i++) {
            out.push(0);
        }
        for (let i = arr.length-1; i >= 0; i--) {
            out.push(arr[i]);
        }
        return out.join("");
    }
 };
 
 function runProgram(input) {
     input = input.trim().split("\n");
     for (let i = 1; i < input.length; i++) {
         let num = input[i].trim().split("");
         console.log(find(num));
         
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
 
 
 