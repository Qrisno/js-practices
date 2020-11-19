function reverse(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('The input has to be only array!');
    }
    if (arr.length === 0) {
        throw new Error('Array is empty!');
    }
    let n = arr.length;
    let halfN = n / 2;
    let arrLen = n - 1;
    for (let i = 0; i <= halfN; i++) {
        let first = arr[i];
        arr[i] = arr[arrLen - i];
        arr[arrLen - i] = first;
    }
    return arr;
}

try {
    console.log(reverse([1, 2, 3]));
    reverse([]);
} catch (err) {
    console.log(err.message);
}
try {
    reverse(1);
} catch (err) {
    console.log(err.message);
}