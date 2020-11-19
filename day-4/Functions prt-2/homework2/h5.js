let compose = ((...args) => {
    let temp = '';
    let length = args.length - 1;
    for (let i = length; i >= 0; i--) {
        if (typeof args[i] !== 'function') {
            throw new Error('Must be a function!')
        }
        temp = args[i](temp);
    }
    return p => p + temp;
});
console.log(compose((str) => {
    return str + 'c';
}, (str) => {
    return str + 'b';
})('a'));