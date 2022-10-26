/**
 * @param {string} digits
 * @return {string[]}
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 */
 let finalResult;
 let mp = {
     "2": ["a", "b", "c"],
     "3": ["d", "e", "f"],
     "4": ["g", "h", "i"],
     "5": ["j", "k", "l"],
     "6": ["m", "n", "o"],
     "7": ["p", "q", "r", "s"],
     "8": ["t", "u", "v"],
     "9": ["w", "x", "y", "z"],
 };
function f(str, i, result) {
    // base case
    if(i == str.length) {
        // string is exhausted, store the result in an array
        if(result.length > 0)
            finalResult.push(result); // []
        return;
    }
    // let mapping = mp[str[i]]; // str[i] = 2, mapping -> [a, b, c]
    for(let k = 0; k <  mp[str[i]].length; k++) {
        f(str, i + 1, result +  mp[str[i]][k]);
    }
}


var letterCombinations = function(digits) {
    finalResult = [];
    f(digits, 0, "");
    return finalResult;
};