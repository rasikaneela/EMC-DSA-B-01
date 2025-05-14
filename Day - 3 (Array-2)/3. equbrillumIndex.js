// https://leetcode.com/problems/find-pivot-index/description/

function solve(a) {
  for (let i = 0; i < a.length - 1; i++) {
    let l = 0;
    for (let j = 0; j < i; j++) {
      l += a[j];
    }

    let r = 0;
    for (let k = i + 1; k < a.length - 1; k++) {
      r += a[k];
    }

    if (l == r) {
      console.log(i);
      return;
    }
  }
}

solve([1, 7, 3, 6, 5, 5]);
