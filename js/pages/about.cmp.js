export default {
    template: `
    <section class="home-page">
        <nav>
            <router-link to="/about/team">About our Team</router-link> |
            <router-link to="/about/services">About our Services</router-link>
        </nav>
        <router-view />        <img src="img/reading.jpg" alt="books" width="70%">
    </section>
    `,
    data() {
        return {
            interval:null,
        }
    },
    created(){
        this.interval=setInterval(()=>{
            console.log('on about');
        },1000);
    },
    destroyed(){
        clearInterval(this.interval);
        console.log('about destroyed');
    }
}