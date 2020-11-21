var Books = [{
        author: 'Bill',
        title: 'The Road Ahead',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 10),
        get daysAgo() {
            let day1 = this.dateOfRead;
            let today = new Date();
            let day2 = new Date(today.getFullYear(), (today.getMonth() + 1), today.getDate());
            let milSec = 1000 * 60 * 60 * 24;
            let diffmilSec;
            if (typeof day1 !== 'object') {
                return 'yet!';
            } else {

                diffmilSec = Math.abs(day2 - day1);
                let difference = Math.floor(diffmilSec / milSec);
                return difference + ' days ago!';
            }
        }

    },
    {
        author: 'Steve',
        title: 'Walter Isaacson',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 5),
        get daysAgo() {
            let day1 = this.dateOfRead;
            let today = new Date();
            let day2 = new Date(today.getFullYear(), (today.getMonth() + 1), today.getDate());
            let milSec = 1000 * 60 * 60 * 24;
            let diffmilSec;
            if (typeof day1 !== 'object') {
                return 'yet!';
            } else {

                diffmilSec = Math.abs(day2 - day1);
                let difference = Math.floor(diffmilSec / milSec);
                return difference + ' days ago!';
            }

        }
    },
    {
        author: 'Jhon',
        title: 'The Hunger Games',
        haveRead: false,
        dateOfRead: NaN,
        get daysAgo() {
            let day1 = this.dateOfRead;
            let today = new Date();
            let day2 = new Date(today.getFullYear(), (today.getMonth() + 1), today.getDate());
            let milSec = 1000 * 60 * 60 * 24;
            let diffmilSec;
            if (typeof day1 !== 'object') {
                return 'yet!';
            } else {

                diffmilSec = Math.abs(day2 - day1);
                let difference = Math.floor(diffmilSec / milSec);
                return difference + ' days ago!';
            }
        }
    }
];

function read(o) {
    return o ? 'has read' : "hasn't read";
}

function readingStatus(books) {
    let arr = [];
    for (let i = 0; i < books.length; i++) {
        let string = books[i].author + ' ' + read(books[i].haveRead) + ' ' + books[i].title + ' book ' + books[i].daysAgo;

        arr.push(string);

    }
    return arr.forEach((item) => console.log(item));

}


readingStatus(Books);