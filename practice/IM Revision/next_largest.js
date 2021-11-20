let arr = [1, 2, 0, 4, 1, 7, 9, 2];
let n = arr.length;

const largest = (arr, n) => {
    let stack = [];
    let output = [];
    for (let i = n-1; i >= 0; i--) {
        if (stack.length == 0) {
            output.push(-1);
        } else if (stack.length > 0 && arr[i] < stack[stack.length-1]) {
            output.push(stack[stack.length-1]);
        } else if (stack.length > 0 && arr[i] >= stack[stack.length-1]) {
            while (stack.length > 0 && arr[i] >= stack[stack.length-1]) {
                stack.pop();
            }
            if (stack.length === 0) {
                output.push(-1);
            } else {
                output.push(stack[stack.length-1])
            }
        }
        stack.push(arr[i]);
    }
    return output.reverse()
}

console.log(largest(arr, n))