const myLibrary = [{title: "Will Love's Neeloo", author: 'Will', pages: '15', read: 'Yes', score: '10/10'}];

const showBookInfo = document.querySelector(".book");
const bookInfo = document.querySelector(".info-modal");

showBookInfo.addEventListener('click', () => {
bookInfo.showModal();
})







function Book(title, author, pages, read, score) {
this.title = title,
this.author = author,
this.pages = pages,
this.read = read,
this.score = score
}

function addBookToLibrary() {
    const title = prompt("Title: ")
    const author = prompt("Author: ")
    const pages =  prompt("Pages: ")
    const read =  prompt("Have you read this book?: ")
    const score = prompt("Score: ")
    myLibrary.push(new Book(title, author, pages, read, score))
}

function addBookToShelf() {
    myLibrary.forEach((book,index) => {
        const bookshelf = document.querySelector(".bookshelf")
        const entry = document.createElement("div")
        entry.setAttribute("id",`Index${index}`)
        for (const key in book) {
            let propertyClass = document.createElement("div")
            propertyClass.className = `${key}`
                let propertyName = document.createElement("h1")
                let propertyNameValue = document.createTextNode(`${key}: `)
                propertyName.appendChild(propertyNameValue)
                propertyClass.appendChild(propertyName)
    
                let property = document.createElement("p")
                let propertyValue = document.createTextNode(`${book[key]}`)
                property.appendChild(propertyValue)
                propertyClass.appendChild(property)
            entry.appendChild(propertyClass)
        }
        bookshelf.appendChild(entry)
    });
        
};