function f(arr, i, result) {
    // base case
    if(i == arr.length) {
        // considered all the elements and the array is exhausted now, so just print the subsequence and return
        if(result.length == 0) { // print this for empty subsequence
            console.log("{}");
            return;
        }
        console.log(result);
        return;
    }
    f(arr, i+1, result + arr[i]); // pick the ith element
    f(arr, i+1, result); // avoid the ith element
}

f(['a', 'b', 'c'], 0, "");