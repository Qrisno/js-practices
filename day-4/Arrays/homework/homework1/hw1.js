function f(arr) {
    let sum1 = 0;
    if (!Array.isArray(arr)) {
        throw new Error('The input must be an array!');
    } else {
        for (let i = 0; i < arr.length; i++) {

            if (Array.isArray(arr[i])) {
                sum1 += f(arr[i]);
            } else if (typeof arr[i] !== 'number') {
                throw new Error('Not a Number!');
            } else if (typeof arr[i] === 'number') {
                sum1 += arr[i];
            }
        }
        return sum1;
    }
}
const arr = [
    [
        [1, 2],
        [1, 2]
    ],
    [
        [2, 1],
        [1, 2]
    ]
];
const arr2 = [
    [
        [
            [
                [1, 2]
            ]
        ]
    ]
];
const arr3 = [
    [
        [
            [
                [1, 2]
            ]
        ], 2
    ], 1
];
const arr4 = [
    [
        [
            [
                []
            ]
        ]
    ]
];
const arr5 = [
    [
        [
            [
                [], 3
            ]
        ]
    ]
];

const a = 'b';
const arr6 = ['a', 1, 2];
try {
    console.log(f(arr));
    console.log(f(arr2));
    console.log(f(arr3));
    console.log(f(arr4));
    console.log(f(arr5));
    f(a);
} catch (err) {
    console.log(err.message);
}
try {
    f(arr6);
} catch (err) {
    console.log(err.message);
}