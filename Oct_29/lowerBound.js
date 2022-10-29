/**
 * This function returns the index of the first value greater than or equal to x
 * @param {* Given sorted array} arr 
 * @param {* value for which we have to find lower bount} x 
 */
function lowerBound(arr, x) {
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    let lo = 0;
    let hi = arr.length - 1;
    let ans = arr.length;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if(arr[mid] < x) {
            // move to the right
            lo = mid + 1;
        } else {
            // move to the left
            hi = mid - 1;
            ans = mid;
        }
    }
    return ans;
}

console.log(lowerBound([1,2,2,4,4,4,6,8,10,10,12], 50));