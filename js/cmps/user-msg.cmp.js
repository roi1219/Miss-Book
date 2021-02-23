import { eventBus } from "../services/event-bus-service.js"

export default {
    template: `
        <section v-if="msg" class="user-msg" :class="msg.type">
            <p>{{msg.txt}}</p>
            <!-- <router-link v-if="msg.path" :to="msg.path"> see book</router-link><br/> -->
            <button @click="msg=null">close</button>
        </section>
    `,
    data() {
        return {
            msg:null
        }
    },
    methods: {
        setMsg(msg) {
            this.msg = msg
            setTimeout(() => {
                this.msg = null
            }, 8000);
        }
    },
    created() {
        eventBus.$on('show-msg', this.setMsg)
    },
    destroyed(){
        eventBus.$on('show-msg', this.setMsg)
    }
}