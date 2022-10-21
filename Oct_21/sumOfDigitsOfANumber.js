function f(x) {
    if(x == 0) return 0;
    return f(Math.floor(x / 10)) + x%10;
}

console.log(f(1234));