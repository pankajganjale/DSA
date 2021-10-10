function runProgram(input) {
    var input = input.trim().split("\n");
    let word = input[0];
    let str = input[1];
    let k  = word.length;

    let obj = {};
    let objCount = k;
    let count = 0;
    let i = 0;
    let j = 0;

    for (let x = 0; x < word.length; x++) {
        if (obj[word[x]] === undefined) {
            obj[word[x]] = 1;
        } else {
            obj[word[x]]++;
        }
    }

    while (j < str.length) {
        if (obj[str[j]] !== undefined) {
            obj[str[j]]--;
            objCount--;
        }
        if (j-i+1 < k) {
            j++;
        } else if (j-i+1 === k) {
            if (objCount === 0) {
                count++;
            }
            if (obj[str[i]] !== undefined) {
                obj[str[i]]++;
                objCount++;
            }
            i++;
            j++;
        }
        
    }
    console.log(count)
}

if (process.env.USERNAME === 'panka') {
runProgram(`aaba
aabaabaa`);
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
