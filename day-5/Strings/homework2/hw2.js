function extractCurrencyValue(source) {
    if (typeof source !== 'string') {
        throw new Error('Parameter has to be a string !');
    }
    let arr = source.split('');
    let first = parseInt(arr[0]);
    if (typeof first !== 'number' || isNaN(first)) {
        arr.shift();
        let newArr = parseInt(arr.join(''));
        return newArr;
    } else {
        return parseInt(source);
    }

}
try {
    console.log(extractCurrencyValue('$120'));
    console.log(extractCurrencyValue('!130'));
    console.log(extractCurrencyValue('120'));
    console.log(extractCurrencyValue(120));
} catch (e) {
    console.log(e.message);
}