export default {
    props: ['isDark'],
    template: `
    <section class="app-header">
    <header>
                <nav class="flex main-content">
                    <h1>MISS BOOKS</h1>
                    <div>
                        <nav>
                            <router-link active-class="active-link" to="/" exact>Home</router-link> |
                            <router-link to="/book">Books</router-link> |
                            <router-link to="/about">About</router-link>
                        </nav>
                        <button :class="{dark:!dark,light:dark}" @click="toggleDarkMode">darkmode</button>
                    </div>
                </nav>
            </header>
    </section>
    `,
    data() {
        return {
            dark: this.isDark
        }
    },
    methods: {
        toggleDarkMode() {
            this.dark = !this.dark;
            document.body.classList.toggle('dark');
        }
    },
}