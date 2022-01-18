const find = (str1, str2, str3) => {
    let ans = "";
   for (let i = 0; i < Math.min(str1.length, str2.length, str3.length); i++) {
       if (str1[i] === str2[i] && str2[i] === str3[i]) {
           ans += str1[i];
       } else {
           break;
       }
   } 
   return ans.length > 0 ? ans : "None";
};

function runProgram(input) {
    input = input.trim().split("\n");
    for (let i = 1; i < input.length; i++) {
        let [str1, str2, str3] = input[i].trim().split(" ");
        console.log(find(str1, str2, str3));
    }
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


