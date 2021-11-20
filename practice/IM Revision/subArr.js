let a = "abcde";
let n = a.length;

const subArr = (a, n) => {
    for (let i = 0; i < n; i++) {
        let sub = "";
        for (let j = i; j < n; j++) {
            sub += a[j]; 
            console.log(sub);
        }
    }
}

subArr(a, n);