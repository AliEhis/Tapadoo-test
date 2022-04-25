import BookService from "../../services/BookService";

export default {
  fetchBooks () {
    const response = BookService.fetchBooks()
      .then((result) => {
        return { status: true, books: result.data };
      })
      .catch((err) => {
        if (err?.response === undefined) {
          return { status: false, message: 'Oops! took long to get a response' }
        } else {
          return { status: false, message: err?.response?.data?.message }
        }
      })
      return response
  },
  detailsBooks (bookId) {
    const response = BookService.detailsBooks(bookId)
      .then((result) => {
        return { status: true, book: result.data };
      })
      .catch((err) => {
        if (err?.response === undefined) {
          return { status: false, message: 'Oops! took long to get a response' }
        } else {
          return { status: false, message: err?.response?.data?.message }
        }
      })
      return response
  },
};
