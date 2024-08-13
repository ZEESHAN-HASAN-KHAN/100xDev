function sum_one_n(n)
{
    let sum = 0;
    for (let i = 0; i <= n; i++)
    {
        sum += i;
    }
    return sum;
}
let ans = sum_one_n(100);
console.log(ans);
console.log(100 * (100 + 1) / 2);