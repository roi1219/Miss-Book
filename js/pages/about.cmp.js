export default {
    template: `
    <section class="home-page">
        <h1>about!!!</h1>
        <img src="../img/reading.jpg" alt="books" width="70%">
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