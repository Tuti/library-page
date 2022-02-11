
const bookLibrary = [];
const books = document.querySelector('#books');

let ex_book = new Book('The Hunger Games', 'Suzanne Collins', '300', true)
let addBook = document.getElementById('addBook');
addBook.addEventListener('click', event => {
    addBookToLibrary(ex_book);
})


function Book(title, author, pageCount, haveRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.haveRead = haveRead;
}

function addBookToLibrary(book) {
    bookLibrary.push(book);
    console.log(bookLibrary);
    let entry = document.createElement('div');
    //let text = document.createTextNode('this is a test this is a test');
    let title_bold = document.createElement('p');
    title_bold.style.cssText = 'text-align: center; font-weight: bold;'
    title_bold.append('Title:')

    entry.style.cssText = 'display: flex; background-color: grey; text-align: center; width: 100%; height: 100%; aspect-ratio: 1;'
    //book.appendChild(text);
    entry.appendChild(title_bold);
    books.appendChild(entry);
}