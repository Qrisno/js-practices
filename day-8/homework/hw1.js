class Validator {
    constructor() {

    }
    isEmail(email) {
        if (typeof email !== 'string') {
            throw new Error('Input must be a string!');
        } else {
            const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (regexEmail.test(email)) {
                return email;
            } else {
                throw new Error('It is not an email');
            }
        }


    }
    isDomain(domain) {
        if (typeof domain !== 'string') {
            throw new Error('Input must be a string!');
        } else {
            const regexDomain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
            if (regexDomain.test(domain)) {
                return domain;
            } else {
                throw new Error('It is not a domain');
            }
        }


    }
    isDate(date) {
        if (typeof date !== 'string') {
            throw new Error('Input must be a date!');
        } else {
            const regexDate = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
            if (regexDate.test(date)) {
                return date;
            } else {
                throw new Error('It is not a date');
            }
        }


    }
    isPhone(phone) {
        if (typeof phone !== 'string') {
            throw new Error('Input must be a phone!');
        } else {
            const regexPhone = /^\+995\(5\d{2}\)\d{6}$/;
            if (regexPhone.test(phone)) {
                return phone;
            } else {
                throw new Error('It is not a phone');
            }
        }


    }
}
var validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+995(591)150140'));