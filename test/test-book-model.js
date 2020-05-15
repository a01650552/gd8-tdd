const Book = require('../app/models/Book');
const assert = require('assert');
const axios = require('axios');

/*
describe('Book', () => {
    describe('#getTitle', () => {
        it('Should return the title of the book', () => {
            let title = 'House of Leaves';
            let author = 'Danielewski';
            let book = new Book(title, author);
            assert.equal(book.getTitle(), title);
        })
    })

    describe('#equal', () => {
        it('Should be the same book', () => {
            let title = 'House of Leaves';
            let author = 'Danielewski';
            let bookA = new Book(title, author);
            let bookB = new Book(title, author);
            assert.deepEqual(bookA, bookB);
        })
    })

    describe('#apiFindsTheBook', () => {
        it('Should find book', async () => {
            let isbn = '6073151527';
            const data = await axios.get('https://openlibrary.org/api/books?bibkeys=ISBN:' + isbn + '?format=json&jscmd=data');
            assert.ok(data.status == 200);
        })
    })

    describe('#apiFindsTheBook (Promises)', () => {
        it('Should find book', (done) => {
            let isbn = '6073151527';
            axios.get('https://openlibrary.org/api/books?bibkeys=ISBN:' + isbn + '?format=json&jscmd=data')
             .then(data => {
                assert.ok(data.status == 200);
                done();
             })
             .catch(err => {
                done(error);
             })
        })
    })

})

*/