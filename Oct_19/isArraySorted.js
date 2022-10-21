function f(arr, i) {
    // base case
    if(i == arr.length - 1) {
        // we are at the last element
        return true;
    }

    return (arr[i] <= arr[i+1]) && f(arr, i+1);
}

console.log(f([1,2,3,-4,5,6], 0));