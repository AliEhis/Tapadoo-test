<template>
  <section>
    <div class="row">
      <div class="col">
        <h1 class="text-center fw-bolde my-5">Book Details</h1>
      </div>
    </div>
    <div class="row" v-if="loading">
      <div class="col">
        <h4 class="text-center fw-lighter fst-italic">Retrieving book info...</h4>
      </div>
    </div>
    <div class="container" v-else>
      <div class="row align-items-center">
        <div class="col-md-4 col-12">
          <img src="https://pagetwo.com/content/wp-content/uploads/2021/01/OnePageMarketing_ColBkgrnd.jpg" class="img-fluid d-block mx-auto">
        </div>
        <div class="col-md-8 col-12">
          <p class="card-text mt-4">
            {{ `${book.currencyCode}`}} {{ `${book.price && this.$globalFunc.currency(book.price)}` }}
          </p>
          <h3 class="my-2">{{ book.title }}</h3>
          <p class="card-text text-muted">
            <strong>Author: </strong>{{ book.author }} <br>
            <strong>ISBN: </strong> {{ book.isbn }}
          </p>
          <p class="card-text text-justify">
            {{ book.description }}
          </p>
          <button class="btn btn-dark btn-sm" @click.prevent="handleRouteChange()">Back to list</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BookHelpers from '../functions/actions/BookRequest'
import BookCard from '../components/BookCard.vue'
export default {
  name: "Details",
  components: {
    BookCard
  },
  computed: {},
  props: {
    bookId: {
      required: true,
      type: [Number, String]
    }
  },
  mounted () {
    this.loadBookDetail(this.bookId); // initiate request to load books
  },
  data() {
    return {
      loading: false,
      book: {}
    }
  },
  methods: {
    async loadBookDetail (bookId) {
      this.loading = true
      const response = await BookHelpers.detailsBooks(bookId)
      if (response.status) {
        this.book = response.book
      } else {
        alert(response.message, 'error')
        this.handleRouteChange()
      }
      this.loading = false
    },
    handleRouteChange() {
      this.$router.push({
        name: "Home"
      })
    }
  },
};
</script>

<style scoped>
</style>