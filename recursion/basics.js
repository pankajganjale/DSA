// Total of n numbers
let total = (n) => {
    if (n === 1) return n;
    return n + total(n-1);
}
console.log(total(5))

// Print n numbers from n to 1
let print = (n) => {
    if (n === 1) return n;
    return console.log(n), print(n-1);
}
console.log(print(5));

// Print n numbers from 1 to n
let show = (n, i) => {
    if (i === n) return n;
    console.log(i);
    return show(n, i+1);
}
console.log(show(5, 1));

// Print elements from string or array
let arr = (inp, i) => {
    if (i === inp.length-1) return inp[i];
    console.log(inp[i]);
    return arr(inp, i+1);
}
console.log(arr(["p", "a", "n"], 0));

// String to array or array to string
let newStr = "";
let str = (inp, i) => {
    if (i === inp.length-1) return newStr = newStr + inp[i];
    newStr = newStr + inp[i];
    return str(inp, i+1);
}
console.log(str(["p", "a", "n"], 0))
