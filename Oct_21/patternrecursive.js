let ans = "";
function f(n, row, col) {
    if(row > n) {
        return;
    }
    if(col > row) {
        // move to next row
        ans += "\n";
        f(n, row+1, 1);
    } else {
        // keep on adding stars
        ans += "* ";
        f(n, row, col+1);
    }
}

f(5, 1, 1);
console.log(ans);