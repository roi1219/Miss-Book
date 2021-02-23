import homePage from './js/pages/home-page.cmp.js'
import bookApp from './js/pages/book-app.cmp.js'
import bookDetails from './js/pages/book-details.cmp.js'
import about from './js/pages/about.cmp.js'
import bookAdd from './js/cmps/book-add.cmp.js'

const routes = [
    {
        path: '/',
        component: homePage,
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
    {
        path: '/about',
        component: about
    },
    {
        path:'/add',
        component:bookAdd
    }
    // {
    //     path: '/book/edit/:bookId?',
    //     component: bookEdit
    // },
]

export const myRouter = new VueRouter({ routes })