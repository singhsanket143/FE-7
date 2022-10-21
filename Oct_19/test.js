function recur(n) {
    let a = 1;
    if(n == 1) return a
    for(let i=1; i<n; ++i)
        a = a + recur(i) * recur(n-i) 
    return a;

}

console.log(recur(6));