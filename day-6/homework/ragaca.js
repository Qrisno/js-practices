const data = {
    name: 'fred',
    age: 10,
    contact: {
        email: 'moo@example.com',
        meta: {
            verified: true,
            tags: ['important']
        }
    }

};
Object.defineProperty(data, 'mergeDeepRight', {
    value: function(object1, object2 = this) {
        for (var property of Object.getOwnPropertyNames(object2)) {

            if (object1.hasOwnProperty(property)) {

                if (Array.isArray(object1[property])) {

                    object2[property] = [...object1[property], ...object2[property]];

                } else if (typeof object2[property] === 'object') {

                    this.mergeDeepRight(object1[property], object2[property]);

                } else {

                    object2[property] = object1[property];
                }



            }
        }
        for (var prop of Object.getOwnPropertyNames(object1)) {
            if (Object.getOwnPropertyNames(object2).includes(prop) === false) {
                object2[prop] = object1[prop];
            }
        }
    },
    enumerable: false,
});

data.mergeDeepRight({
    age: 40,
    contact: {
        email: 'baa@example.com',
        favorite: true,
        meta: {
            tags: ['vip']
        }
    }
});
console.log(data);