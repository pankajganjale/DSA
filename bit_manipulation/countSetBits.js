let find = (n) => {
    let count = 0;
    while (n > 0) {
        if (n & 1 !== 0) {
            count++;
        }
        n /= 2;
    }
    return count;
}

console.log(find(16));