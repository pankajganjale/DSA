let find = (n, k) => {
    let i = 1;
    i = i << k;
    let j = ~i;
    return n & j;
}

console.log(find(27, 4));