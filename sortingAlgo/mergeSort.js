const sortArr = (m, arr, lo, hi) => {
    let n1 = m - lo + 1;
    let n2 = hi - m;
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < n1; i++) {
        arr1[i] = arr[lo + i];
    }
    for (let j = 0; j < n2; j++) {
        arr2[j] = arr[m + 1 + j];
    }
    let i = 0;
    let j = 0;
    let k = lo;
    while (i < n1 && j < n2) {
        if (arr1[i] <= arr2[j]) {
            arr[k] = arr1[i];
            i++;
        } else {
            arr[k] = arr2[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = arr1[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = arr2[j];
        j++;
        k++;
    }
  };
  
  const mergeSort = (arr, lo, hi) => {
      if (lo < hi) {
          let mid = Math.floor((lo + hi) / 2);
          mergeSort(arr, lo, mid);
          mergeSort(arr, mid+1, hi);
          sortArr(mid, arr, lo, hi);
      } else {
          return;
      }
  };
  
  function runProgram(input) {
      input = input.trim().split("\n");
      let n = +input[0];
      let arr = input[1].trim().split(" ").map(Number);
      let l = 0;
      let h = n-1;
      let m = Math.floor((h-l)/2);
      mergeSort(arr, 0, arr.length-1);
      console.log(arr.join(" "));
  }
  
  if (process.env.USERNAME === 'panka') {
    runProgram();
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  