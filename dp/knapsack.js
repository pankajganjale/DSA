var item = [10, 20, 30]
var value = [60, 100, 120]
var w = 50;
var n = item.length

function knapsack(item, value, w, n) {
    if (n == 0 || w == 0) {
        return 0
    }
    if (item[n - 1] <= w) {
        return Math.max(value[n - 1] + knapsack(item, value, w - item[n - 1], n - 1), knapsack(item, value, w, n - 1))
    }
    else {
        return knapsack(item, value, w, n - 1)
    }
}
console.log(knapsack(item, value, w, n));



//for iterative mode top to down method
// var dp = []
// for (var i = 0; i <= n; i++) {
//     dp[i] = []
//     for (var j = 0; j <= w; j++) {
//         if (i == 0 || j == 0) {
//             dp[i][j] = 0
//         }
//     }
// }
// for (var i = 1; i <= n; i++) {
//     for (var j = 1; j <= w; j++) {
//         if (item[i - 1] <= w) {
//             dp[i][j] = Math.max(value[i - 1] + dp[i - 1][j - item[i - 1]], dp[i - 1][j])
//         } else {
//             dp[i][j] = dp[i - 1][j]
//         }
//     }
// }

// console.log(dp[n][w]);