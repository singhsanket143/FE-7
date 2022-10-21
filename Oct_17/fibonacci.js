function f(n) {
    // base case
    if(n == 0) return 0;
    if(n == 1) return 1;
    // assumption
    let fn_1 = f(n-1); // assume f(n-1) works correctly
    let fn_2 = f(n-2); // assume f(n-2) works correctly
    // self work
    return fn_1 + fn_2;
}

console.log(f(3));