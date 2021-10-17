let find = (n) => {
    if (n === 1) return 1;
    return `${n}` + " " + find(n-1);
}

console.log(find(3))