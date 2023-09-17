const myLibrary = [];

function Book(title, author, pages, read, score, review) {
this.title = title,
this.author = author,
this.pages = pages,
this.read = read,
this.score = score,
this.review = review
}

function addBookToLibrary() {
    /*const titleValue = document.querySelector("#new-title").value
    console.log(titleValue)
    const authorValue = document.querySelector("#new-author").value
    console.log(authorValue)
    const pageCountValue = document.querySelector("#new-page-count").value
    console.log(pageCountValue)
    const readStatus = document.querySelector("#is-read").checked
    console.log(readStatus)
    const reviewTextValue = document.querySelector("#review-text").value
    console.log(reviewTextValue)
    const reviewScore = document.querySelector('input[name="book-score"]:checked').value
    console.log(reviewScore)*/
    const title = document.querySelector("#new-title").value
    const author = document.querySelector("#new-author").value
    const pages =  document.querySelector("#new-page-count").value
    const read =  document.querySelector("#is-read").checked
    const score = document.querySelector('input[name="book-score"]:checked').value
    const review = document.querySelector("#review-text").value
    myLibrary.push(new Book(title, author, pages, read, score, review))
}

function addBookToShelf() {
    const bookshelf = document.querySelector(".bookshelf")
    myLibrary.forEach((entry,index) => {
        const book = document.createElement("div")
        book.className = "book"
        book.setAttribute("data-index",`${index}`)
        if (entry.read === "n") {
            book.setAttribute("data-read","unread")
        }
        bookshelf.appendChild(book)

        const title = document.createElement("div")
        title.className = "title"
        const titleText = document.createElement("span")
        titleText.textContent = entry.title
        title.appendChild(titleText)
        book.appendChild(title)

        const rating = document.createElement("div")
        rating.className = "rating"

        const firstStar = document.createElementNS("http://www.w3.org/2000/svg",'svg')
        firstStar.setAttribute("class","icon")
        firstStar.setAttribute("data-id",1)
        if (parseInt(entry.score) > 0) {
        firstStar.setAttribute("data-fill","filled")
        }
        const useSVG = document.createElementNS("http://www.w3.org/2000/svg","use")
        useSVG.setAttribute("href","#star")
        book.appendChild(rating)
        rating.appendChild(firstStar)
        firstStar.appendChild(useSVG)

        const secondStar = document.createElementNS("http://www.w3.org/2000/svg",'svg')
        secondStar.setAttribute("class","icon")
        secondStar.setAttribute("data-id",2)
        if (parseInt(entry.score) > 1) {
            secondStar.setAttribute("data-fill","filled")
        }
        const useSVG2 = document.createElementNS("http://www.w3.org/2000/svg","use")
        useSVG2.setAttribute("href","#star")
        rating.appendChild(secondStar)
        secondStar.appendChild(useSVG2)

        const thirdStar = document.createElementNS("http://www.w3.org/2000/svg",'svg')
        thirdStar.setAttribute("class","icon")
        thirdStar.setAttribute("data-id",3)
        if (parseInt(entry.score) > 2) {
            thirdStar.setAttribute("data-fill","filled")
        }
        const useSVG3 = document.createElementNS("http://www.w3.org/2000/svg","use")
        useSVG3.setAttribute("href","#star")
        rating.appendChild(thirdStar)
        thirdStar.appendChild(useSVG3)

        const fourthStar = document.createElementNS("http://www.w3.org/2000/svg",'svg')
        fourthStar.setAttribute("class","icon")
        fourthStar.setAttribute("data-id",4)
        if (parseInt(entry.score) > 3) {
            fourthStar.setAttribute("data-fill","filled")
        }
        const useSVG4 = document.createElementNS("http://www.w3.org/2000/svg","use")
        useSVG4.setAttribute("href","#star")
        rating.appendChild(fourthStar)
        fourthStar.appendChild(useSVG4)

        const fifthStar = document.createElementNS("http://www.w3.org/2000/svg",'svg')
        fifthStar.setAttribute("class","icon")
        fifthStar.setAttribute("data-id",5)
        if (parseInt(entry.score) > 4) {
            fifthStar.setAttribute("data-fill","filled")
        }
        const useSVG5 = document.createElementNS("http://www.w3.org/2000/svg","use")
        useSVG5.setAttribute("href","#star")
        rating.appendChild(fifthStar)
        fifthStar.appendChild(useSVG5)

        const dialog = document.createElement("dialog")
        dialog.className = "info-modal"
        book.appendChild(dialog)

        const displayForm = document.createElement("form")
        displayForm.setAttribute("method","dialog")
        dialog.appendChild(displayForm)

        const authorInfo = document.createElement("span")
        authorInfo.className = "author"
        displayForm.appendChild(authorInfo)

        const authorInfoName = document.createElement("span")
        authorInfoName.className = "author-name"
        authorInfoName.textContent = "Author: "
        authorInfo.appendChild(authorInfoName)

        const authorInfoValue = document.createElement("span")
        authorInfoValue.className = "author-value"
        authorInfoValue.textContent = `${entry.author}`
        authorInfo.appendChild(authorInfoValue)

        const pageCount = document.createElement("span")
        pageCount.className = "page-count"

        const PageCountName = document.createElement("span")
        PageCountName.className = "page-count-name"
        PageCountName.textContent = "Page Count: "
        pageCount.appendChild(PageCountName)

        const PageCountValue = document.createElement("span")
        PageCountValue.className = "page-count-value"
        PageCountValue.textContent = `${entry.pages}`
        pageCount.appendChild(PageCountValue)
        displayForm.appendChild(pageCount)

        const reviewFieldSet = document.createElement("fieldset")
        reviewFieldSet.className = "review-fieldset"
        displayForm.appendChild(reviewFieldSet)

        const reviewFieldSetLegend = document.createElement("legend")
        reviewFieldSetLegend.textContent = "Review"
        reviewFieldSet.appendChild(reviewFieldSetLegend)

        const reviewInfo = document.createElement("aside")
        reviewInfo.className = "review"
        reviewInfo.textContent = `${entry.review}`
        reviewFieldSet.appendChild(reviewInfo)

        const closeInfoDialog = document.createElement("button")
        closeInfoDialog.className = "close"
        closeInfoDialog.textContent = "X"
        displayForm.appendChild(closeInfoDialog)

        book.addEventListener('click', () => {
            dialog.showModal();
            })
        
        const infoModalActions = document.createElement("div")
        infoModalActions.className = "actions"
        dialog.appendChild(infoModalActions)

        const readToggle = document.createElement("button")
        readToggle.className = "toggle-read"
        if (entry.read === false) {
            readToggle.textContent = "Unread"
            book.setAttribute("data-read","unread")
        } else readToggle.textContent = "Read"
        infoModalActions.appendChild(readToggle)
        readToggle.addEventListener('click', () => {
            if (book.getAttribute("data-read")=="unread") {
                book.setAttribute("data-read","")
                readToggle.textContent = "Read"
            }
            else {
                book.setAttribute("data-read","unread")
                readToggle.textContent = "Unread"
            }
        })

        const deleteBook = document.createElement("button")
        deleteBook.className = "delete"
        deleteBook.textContent = "Remove Book"
        infoModalActions.appendChild(deleteBook)
        deleteBook.addEventListener('click', () => {
            bookshelf.removeChild(book)
            myLibrary.splice(index,1)
        })
    });  
    myLibrary.pop()   
};

const addBookModal = document.querySelector(".add-book-modal")
const addBook = document.querySelector(".add-book")
addBook.addEventListener('click', () => {addBookModal.showModal()} )

const closeButton = document.querySelector(".close")
closeButton.addEventListener('click', (e) => {
    e.preventDefault()
    addBookModal.close()
})

const isReadLabel = document.querySelector(".is-read-label")
const isReadInput = document.querySelector('input[name="is-read"]')


isReadInput.addEventListener('click',() => {
    if (document.querySelector("#is-read").checked == true) {
        isReadLabel.textContent = "Read"
    } else {
        isReadLabel.textContent = "Unread"
    }
})

const submit = document.querySelector(".submit")

submit.addEventListener('click', (e) => {
    e.preventDefault()
    const formElement = document.querySelector(".add-book-modal>form")
    formElement.checkValidity()
    if (formElement.reportValidity() == false) {
    } else {
    addBookToLibrary()
    addBookToShelf()
    formElement.reset()
    addBookModal.close()
    }
})
