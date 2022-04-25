<template>
    <div class="card mb-5">
        <img src="https://pagetwo.com/content/wp-content/uploads/2021/01/OnePageMarketing_ColBkgrnd.jpg" class="card-img top" @click.prevent="handleRouteChange(book.id)">
        <div class="card-body">
            <h6 class="card-title my-0" @click.prevent="handleRouteChange(book.id)">
                {{ book.title }}
            </h6>
            <p class="card-text">
                <small class="text-muted">{{ book.author }}</small>
            </p>
            <p class="card-text">
                {{ `${book.currencyCode} ${this.$globalFunc.currency(book.price)}` }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "BookCard",
    props: {
        book: {
            required: true,
            type: [Object]
        }
    },
    data() {
        return {}
    },
    methods: {
        handleRouteChange(bookId) {
            this.$router.push({
                name: "Details",
                params: {
                    bookId
                }
            })
        }
    }
}
</script>

<style scoped>
img {
    height: 45vh;
    object-fit: cover;
    cursor: pointer;
}
.card:hover {
    transform: scale(1.05);
    transition: all 1s ease;
    z-index: 999;
}
.card-title:hover {
    cursor: pointer;
    color: dodgerblue;
}
</style>