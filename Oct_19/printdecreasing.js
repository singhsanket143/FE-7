function f(n) {
    // base case
    if(n == 1) {
        console.log(1);
        return;
    }
    console.log(n);
    f(n-1);
}


f(10);