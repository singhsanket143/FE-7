function f(n) {
    // base case
    if(n == 1) return 1;

    return n * f(n-1);
}

console.log(f(6));