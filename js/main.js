import { myRouter } from '../routes.js'
import appHeader from './cmps/app-header.cmp.js'
import userMsg from './cmps/user-msg.cmp.js'

const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
            <user-msg/>
            <app-header :isDark="isDark"/>
            <section class="main-content">
                <router-view/>
            </section>
            <footer></footer>
        </section>
    `,
    data() {
        return {
            isDark: false
        }
    },
    components: {
        appHeader,
        userMsg
    }
}

const app = new Vue(options)