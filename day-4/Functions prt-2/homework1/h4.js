let mix = ((...args) => {
    let temp;
    let length = args.length - 1;
    let arr = [];
    let lvl = 0;
    let obj = {
        'errors': [],
        'value': temp
    };
    for (let i = 0; i <= length; i++) {
        if (typeof args[i] !== 'function') {
            throw new Error('Must be a function!')
        }
        lvl += 1;
        try {
            temp = args[i](temp);
        } catch (err) {
            arr.push({
                'name': err.name,
                'message': err.message,
                'stack': err.stack,
                'level': lvl

            });
            obj['errors'] = arr;
        }

    }
    obj['value'] = temp;
    return obj;
});

console.log(mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    throw new RangeError('Range is wrong');
}, (prev) => {
    return prev * 3;
}));