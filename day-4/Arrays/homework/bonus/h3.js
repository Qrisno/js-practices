function rotate(arr, num, str = 'right') {
    if (!Array.isArray(arr)) {
        throw new Error('required and has to be only an array');
    }
    if (typeof num !== 'number') {
        throw new Error('required and has to be a number');
    }
    if (typeof str !== 'string') {
        throw new Error('required and has to be only a string');
    }

    // Using simple method
    if (str === 'left') {
        for (let j = 0; j < num; j++) {
            let temp = arr.shift();
            arr.push(temp);
        }
        //Using swapping method
    } else if (str === 'right') {
        for (let j = 0; j < num; j++) {
            let first = arr[arr.length - 1];
            for (let i = arr.length - 1; i >= 0; i--) {
                arr[i] = arr[i - 1];
            }
            arr[0] = first;
        }
        //this method works too
        // else if (str === 'right') {
        //     for (let j = 0; j < num; j++) {
        //         let first = arr.pop();
        //         arr.unshift(first);

        //     }
        // }
    }
    return arr;

}
const arr = [1, 2, 3];
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

try {
    console.log(rotate(arr, 1, 'left'));
    console.log(rotate(arr1, 1));
    console.log(rotate(arr2, 2));
    rotate('a');
} catch (err) {
    console.log(err.message);
}
try {
    rotate([1, 2], 'm');
} catch (err) {
    console.log(err.message);
}
try {
    rotate([1, 2], 1, 3);
} catch (err) {
    console.log(err.message);
}