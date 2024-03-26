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


export { getStoredBook, saveStoredBook }