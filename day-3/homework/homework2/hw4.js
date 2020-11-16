let testArr = [1, 2, 3];

function f(defArr) {
    if (Array.isArray(defArr) === false) {
        throw new Error('Error: parameter type should be an array');
    }
    if (!defArr.length) {
        throw new Error('Error: parameter can\'t be an empty ');
    }
    if (defArr.length < 0) {
        return;

    } else if (defArr.length >= 2) {
        console.log(defArr[0]);
        return f(defArr.splice(1));
    } else {
        return defArr[0];
    }
}
try {
    console.log(f(testArr));
    console.log(f(1, 2, 3));
} catch (err) {
    console.log(err.message);
}
try {
    console.log(f('Content'));
} catch (err) {
    console.log(err.message);
}
try {
    console.log(f([]));
} catch (err) {
    console.log(err.message);
}