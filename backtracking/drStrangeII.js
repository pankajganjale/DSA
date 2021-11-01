// Dr. Strange is back again and this time he has an array A with n integers which may have duplicates. So he again uses his mind power and time stone to calculate all the possible subsets of the input array A. Generate all the possible subsets.
// Elements within the subset must be in non-decreasing order. All the subsets must be distinct and sorted lexicographically. For an empty subset just print a blank line.

let func = (newArr) => {
    let sum = 0;
    for (let i = 0; i < newArr.length; i++) {
        sum += newArr[i];
    }
    return sum;
}

let search = (findSum, output, ls, newArr) => {
    let count = 0
    for (let i = 0; i < ls.length; i++) {
        if (findSum === ls[i][0] && newArr.length === ls[i][1]) count++;
    }
    if (count === 0) return true;
    return false;
}

let find = (n, arr, j, output, newArr, ls) => {
    let findSum = func(newArr);
    if (search(findSum, output, ls, newArr)) {
        output.push([...newArr]);
        ls.push([findSum, newArr.length]);
    }
    
    if (n === j) return;
    for (let i = j; i < n; i++) {
        newArr.push(arr[i]);
        find(n, arr, i+1, output, newArr, ls);
        newArr.pop()
    }
}

function runProgram(input) {
    let inp = input.trim().split("\n");
    let n = +inp[0];
    let arr = inp[1].trim().split(" ").map(Number);
    let output = [];
    let ls = []
    let j = 0;
    let newArr = [];
    find(n, arr, j, output, newArr, ls);
    // output.sort()
    output.unshift([])
    for (let i = 0; i < output.length; i++) {
      console.log(output[i].sort(function(a, b) {
        return a - b;
      }).join(" "))
    }
}

if (process.env.USERNAME === 'panka') {
runProgram(`2
10 3`);
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


