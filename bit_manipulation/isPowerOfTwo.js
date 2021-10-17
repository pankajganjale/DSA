let find = (n) => {
    if (n === 0 || n === 1) return false;
    return (!(n & n-1));
}

console.log(find(3))