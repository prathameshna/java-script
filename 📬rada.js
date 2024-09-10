/* Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223 */

function reverse(num) {
    if (num >= 0 && num <= 9) {
        return num;
    }

    let reverse = 0;
    while (num != 0) {
        reverse = reverse * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return reverse;
}
console.log(reverse(123));




