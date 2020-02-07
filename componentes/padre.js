Vue.component('padre', {
    template: //html 
        `
        <div>
        <h1>numero {{numero}}</h1>
        <hijo></hijo>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['numero'])
    }
});