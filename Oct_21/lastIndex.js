function f(arr, x, i) {
    // base case
    if(i == -1) return -1;
    return ((arr[i] == x) ? i : f(arr, x, i-1));
}

let arr = [1,2,3,4,-1];
let x = 2;
console.log(f(arr, x, arr.length - 1));