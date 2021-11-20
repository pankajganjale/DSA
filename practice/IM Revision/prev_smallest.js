let arr = [1, 2, 0, 4, 1, 7, 9, 2];
let n = arr.length;

const smallest = (arr, n) => {
    let stack = [];
    let output = [];
    for (let i = 0; i < n; i++) {
        if (stack.length === 0) {
            output.push(-1);
        } else if (stack[stack.length-1] < arr[i]) {
            output.push(stack[stack.length-1]);
        } else if (stack[stack.length-1] >= arr[i]) {
            while (stack[stack.length-1] >= arr[i]) {
                stack.pop();
            }
            if (stack.length === 0) {
                output.push(-1);
            } else {
                output.push(stack[stack.length-1]);
            }
        }
        stack.push(arr[i]);
    }
    return output;
}

console.log(smallest(arr, n))