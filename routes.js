import homePage from './js/pages/home-page.cmp.js'
import bookApp from './js/pages/book-app.cmp.js'
import bookDetails from './js/pages/book-details.cmp.js'
import about from './js/pages/about.cmp.js'
import bookAdd from './js/cmps/book-add.cmp.js'

const aboutTeam = {
    template: `<section>
    <div>
      <div>
        <div>
          <img src="img/4.jpg">
          <h4>Roi Levy</h4>
          <p>Fullstack WEB Developer</p>
          <ul>
            <li>
              <a href="https://www.twitter.com/" target="_blank" title="twitter">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.facebook.com/" target="_blank" title="facebook">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.linkedin.com/" target="_blank" title="linkedin">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://github.com/roi1219" target="_blank" title="github">
                <i class="fa fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          eaque, laboriosam veritatis, quos non quis ad perspiciatis,
          totam corporis ea, alias ut unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
          laboriosam veritatis, quos non quis ad perspiciatis,
          totam corporis ea, alias ut unde.</p>
      </div>
    </div>
  </section>
    `
}
const aboutServices = {
    template: `
        <section>
            <h2>Our Services are Awesome</h2>
            <p>Services are Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, porro odit minima vitae aspernatur, dolore explicabo eius ut ducimus numquam laborum repudiandae assumenda suscipit non perferendis obcaecati inventore vel est!</p>
            <h4>We are everywhere</h4>
            <input type="text" ref="loc" placeholder="Your location" />
        </section>
    `,
    mounted() {
        const el = this.$refs.loc;
        el.focus();
        el.scrollIntoView();
    }
}

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
        component: about,
        children: [
            {
                path: 'team',
                component: aboutTeam
            },
            {
                path: 'services',
                component: aboutServices
            }            
        ]
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