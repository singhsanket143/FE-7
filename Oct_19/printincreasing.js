function f(n) {
    // base case
    if(n == 1) {
        console.log(1);
        return;
    }
    f(n-1);
    console.log(n);
}


f(10);