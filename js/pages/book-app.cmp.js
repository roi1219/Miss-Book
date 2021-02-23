import { bookService } from '../services/book-service.js'
import bookList from '../cmps/book-list.cmp.js'
import bookFilter from '../cmps/book-filter.cmp.js'
import bookDetails from '../pages/book-details.cmp.js'
// import bookAdd from '../cmp/book-add.cmp.js'

export default {
    template: `
        <section>
            <book-filter v-if="!selectedBook" @filtered="setFilter"/>
            <router-link to="/add" style="color:red">Add A Book</router-link>
            <book-list v-if="!selectedBook" :books="booksToShow" @selected="selectBook"/>
            <book-details v-else :book="selectedBook" @close="selectedBook = null"/>
        </section>
    `,
    data() {
        return {
            books: null,
            selectedBook: null,
            filterBy: null,
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        selectBook(book) {
            this.selectedBook = book;
        },
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            if (this.filterBy.byName) {
                const searchStr = this.filterBy.byName.toLowerCase();
                const booksToShow = this.books.filter(book => {
                    return book.title.toLowerCase().includes(searchStr);
                });
                return booksToShow;
            }
            else{
                if (this.filterBy.byPrice === '') return this.books;
                const searchPrice = this.filterBy.byPrice;
                const booksToShow = this.books.filter(book => book.listPrice.amount <= searchPrice);
                return booksToShow;
            } 
        }
    },
    components: {
        bookFilter,
        bookList,
        bookDetails
    },
    created() {
        bookService.query()
            .then(books=> this.books=books);
    }
}