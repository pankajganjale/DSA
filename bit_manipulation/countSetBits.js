let find = (n) => {
    let count = 0;
    while (n > 0) {
        if (n & 1 !== 0) {
            count++;
        }
        n = n >> 1;
    }
    return count;
}

console.log(find(16));