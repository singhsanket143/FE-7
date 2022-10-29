/**
 * arr -> the array containing elements to search withing
 * x -> the target element
 */
function linearSearch(arr, x) {
    /**
     * Time: O(n)
     * Space: O(1)
     */
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === x) return i;
    }
    return -1;
}

console.log(linearSearch([2,1,6,8,3,0,9,4], 6));