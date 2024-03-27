const getStoredBook = () => {
    const storedBook = localStorage.getItem("get-book")

    if (storedBook) {
        return JSON.parse(storedBook);
    } else {
        return [];
    }

}

const saveStoredBook = (id) => {
    const saveStoredBooks = getStoredBook()
    const exists = saveStoredBooks.find(bookId => bookId === id)
    if (!exists) {
        saveStoredBooks.push(id)
        localStorage.setItem("get-book", JSON.stringify(saveStoredBooks))
    }
}

const getStoredBook2 = () => {
    const storedBook = localStorage.getItem("book")

    if (storedBook) {
        return JSON.parse(storedBook);
    } else {
        return [];
    }

}

const saveStoredBook2 = (id) => {
    const saveStoredBooks = getStoredBook()
    const exists = saveStoredBooks.find(bookId => bookId === id)
    if (!exists) {
        saveStoredBooks.push(id)
        localStorage.setItem("book", JSON.stringify(saveStoredBooks))
    }
}


export { getStoredBook, saveStoredBook,getStoredBook2, saveStoredBook2 }