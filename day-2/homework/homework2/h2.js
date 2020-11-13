let n = 1000;
let num = 0;
while (true) {
    n /= 2;
    if (n <= 50) break;
    else num++;

}
console.log(`Iterates through the loop ${num} times !`);