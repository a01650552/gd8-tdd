class Book{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }

    getTitle(){
        return this.title;
    }
}

module.exports = Book;