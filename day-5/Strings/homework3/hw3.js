function searchWord(str, part) {
    if (typeof str !== 'string' || typeof part !== 'string') {
        throw new Error('Parameter has to be a string !');
    }
    let n = str.split(part).length - 1
    let output = "'" + part + "' was found " + n + ' times!'
    return output;
}


try {
    console.log(searchWord('The quick brown fox', 'fox'));
    console.log(searchWord('aa, bb, cc, dd, aa', 'aa'));
    searchWord('aa, bb, cc, dd, aa', 1);
} catch (e) {
    console.log(e.message);
}