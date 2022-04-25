import Api from "@/services/Api";

export default {
  fetchBooks() {
    return Api().get(`/books`);
  },
  detailsBooks(bookId) {
    return Api().get(`/book/${bookId}`);
  }
};