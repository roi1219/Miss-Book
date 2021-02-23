import { bookService } from '../services/book-service.js'

export default {
    template: `
    <section class="add-book">
        <h1>ADD A BOOK</h1>
        <label for="new-book">search a book:</label><br/>
        <input type="text" name="new-book" id="new-book" v-model="bookToSearch" @input="searchBook"> 
        <ul class="add-book-list" v-if="resBooks">
            <li v-for="book in resBooks" @click="saveBook(book)">
                <span class="title">
                    {{book.volumeInfo.title}}
                </span>
                <button class="add-btn">+</button>
            </li>
        </ul>
   </section>     
    `,
    data() {
        return {
            bookToSearch: null,
            resBooks: null
        }
    },
    methods: {
        searchBook() {
            if (this.bookToSearch.length > 3) {
                bookService.getGoogleBooks(this.bookToSearch)
                    .then(res => {
                        this.resBooks = res.items
                    })
            }
        },
        saveBook(book) {
            console.log(book);
            const bookToSave = {
                id: null,
                title: book.volumeInfo.title,
                subtitle: book.volumeInfo.subtitle,
                authors: book.volumeInfo.authors,
                publishedDate: book.volumeInfo.publishedDate,
                description: book.volumeInfo.description,
                pageCount: book.volumeInfo.pageCount,
                categories: book.volumeInfo.categories,
                thumbnail: book.volumeInfo.imageLinks.thumbnail,
                language: book.volumeInfo.language,
                listPrice: {
                    amount: 109,
                    currencyCode: 'EUR',
                    isOnSale: false
                },
                reviews:[]
            }
            bookService.save(bookToSave);
            this.$router.push('/book');
        }
    }
}