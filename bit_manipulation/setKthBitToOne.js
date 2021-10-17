let find = (n, k) => {
    let i = 1;
    i = i << k;
    return n | i;
}

console.log(find(27, 2));