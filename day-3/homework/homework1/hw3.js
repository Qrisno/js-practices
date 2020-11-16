function getDivisors(n) {

    if (n <= 0) {
        throw new Error("Error: parameter can't be a 0");
    }
    if (typeof n === 'string') {
        throw new Error('Error: parameter type is not a Number');
    }
    let divisors = [];
    for (let i = 0; i <= n; i++) {

        if (n % i === 0) divisors.push(i);

    }
    return divisors;
}

try {
    console.log(getDivisors(12));
    console.log(getDivisors('Content'));

} catch (err) {
    console.log(err.message);
}
try {
    console.log(getDivisors(0));

} catch (err) {
    console.log(err.message);
}