let find = (n) => {
    if (n && (n & (n-1)) === 0) return n*2;
    let count = 0;
    while (n > 0) {
        count++;
        n = n >> 1;
    }
    return Math.pow(2, count);
}

console.log(find(1))