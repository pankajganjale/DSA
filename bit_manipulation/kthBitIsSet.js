let find = (n, k) => {
    let i = 1;
    i = i << k;
    if (n & i) return true;
    return false;
}

console.log(find(27, 6));