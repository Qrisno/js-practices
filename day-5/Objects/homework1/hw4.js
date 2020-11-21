var Books = [{
        author: 'Bill',
        title: 'The Road Ahead',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 10)
    },
    {
        author: 'Steve',
        title: 'Walter Isaacson',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 5)
    },
    {
        author: 'Jhon',
        title: 'The Hunger Games',
        haveRead: false,
        dateOfRead: NaN
    }
];

function read(o) {
    return o ? 'has read' : "hasn't read";
}

function readingStatus(books) {
    let arr = [];
    for (let i = 0; i < books.length; i++) {
        let string = books[i].author + ' ' + read(books[i].haveRead) + ' ' + books[i].title + ' book';

        arr.push(string);

    }
    arr.forEach((item) => console.log(item));

}


readingStatus(Books);