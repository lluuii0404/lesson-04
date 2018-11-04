function LibraryBook (title_book = "not title", year_book = "unknown", autor_book = "unknown") {
	var title = title_book
	var year = year_book
	var autor = autor_book

	var readerName = null
	var readerData = null

	function giveTheBook(client) {
		readerName = client
		readerData = new Date().toLocaleString().split(", ")[0]
    }

	this.getBookInfo = function() {
		var status_book = readerName ? "книга на руках" : "книга свободна"
		console.log(`Информация о книге: Автор - ${autor}, Названик книги - ${title}, Статут - ${status_book}`)
        return !Boolean(readerData)
	}
	 
	this.getTheBook = function(client) {
		return this.getBookInfo() ? giveTheBook(client) : null
	}

	this.returnBook = function() {
		readerName = null
		readerData = null
	}
}

var book = new LibraryBook("Муму", 1854, "Тургенив")
book.getTheBook("Вася")
book.getBookInfo()
book.getTheBook("Игорь")
book.returnBook()
book.getBookInfo()