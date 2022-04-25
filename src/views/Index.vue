<template>
  <section>
    <loader />
    <div class="row">
      <div class="col">
        <h1 class="text-center fw-bolde my-5">Available Books</h1>
      </div>
    </div>
    <div class="row" v-if="loading">
      <div class="col">
        <h4 class="text-center fw-lighter fst-italic">Loading books...</h4>
      </div>
    </div>
    <div class="container" v-else>
      <div class="row">
        <div class="col-sm-6 col-md-4 col-12" v-for="book in books" :key="book.id">
          <div class="card-deck">
            <book-card :book="book" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BookHelpers from '../functions/actions/BookRequest'
import BookCard from '../components/BookCard.vue'
export default {
  name: "Index",
  components: {
    BookCard
  },
  computed: {},
  mounted () {
    this.loadBooks(); // initiate request to load books
  },
  data() {
    return {
      loading: false,
      books: []
    }
  },
  methods: {
    async loadBooks () {
      this.loading = true
      const response = await BookHelpers.fetchBooks()
      if (response.status) {
        this.books = response.books
      } else {
        alert(response.message, 'error')
      }
      this.loading = false
    }
  },
};
</script>

<style scoped>
</style>