import bookDesc from '../cmps/book-desc.cmp.js'
import reviewAdd from '../cmps/review-add.cmp.js'
import { bookService } from '../services/book-service.js';
import { eventBus } from '../services/event-bus-service.js';

export default {
    template: `
    <section>
        <section v-if="book" class="book-details">
            <div>
                <img :src="book.thumbnail">
            </div>
            <div class="aside">
                <h2>{{book.title}}</h2>
                <h4 v-for="author in book.authors">{{author}}</h4>
                <p><strong>{{bookStatus}}</strong></p>
                <p><strong>Publish Date:</strong>{{book.publishedDate}}</p>
                <p><strong>{{pageCountText}}: </strong>{{book.pageCount}} <strong>Pages</strong></p>
                <p class="flex"><strong>Categories: </strong> <span> {{ getCategory}} </span> .</p>
                <p><strong>Language:</strong>{{book.language}}</p>
                <p class="flex">
                    <strong>Descrispantion:</strong><book-desc :txt="book.description"/>   
                </p>
                <p :class="{expensive:book.listPrice.amount>150,lowcost:book.listPrice.amount<20}"><strong>Price:</strong>{{formattedPrice}}</p>
                <img v-if="book.listPrice.isOnSale" src="img/sale.svg" alt="!!!ON-SALE!!!">
                <button @click="$emit('close')">Close</button>
                <router-link to="/book" class="back">Back</router-link>
            </div>
        </section>
        <review-add :book="book"/>
    </section>
    `,
    data() {
        return {
            book: null
        }
    },
    methods: {
    },
    computed: {
        formattedPrice() {
            const symbol = (this.book.listPrice.currencyCode === 'USD') ? '$' : (this.book.listPrice.currencyCode === 'ILS') ? '₪' : '€';
            return this.book.listPrice.amount + symbol;
        },
        pageCountText() {
            if (this.book.pageCount > 500) return 'Long reading';
            if (this.book.pageCount > 200) return 'Decent reading';
            else return 'Light reading';
        },
        bookStatus() {
            if (new Date().getFullYear() - this.book.publishedDate > 10) return 'Veteran book';
            if (new Date().getFullYear() - this.book.publishedDate < 1) return 'New!';
        },
        formattedDescription() {
            return this.book.description;
        },
        getCategory() {
            return this.book.categories.join(',');

        }
    },
    components: {
        bookDesc,
        reviewAdd
    },
    created() {
        const id = this.$route.params.bookId;
        bookService.getById(id)
            .then(book => this.book = book);
    }
}