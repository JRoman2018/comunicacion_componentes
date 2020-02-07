Vue.component('hijo', {
    template: //html 
        `
    <div class="py-5">
        <button @click="aumentar(2)">+</button>
        <button @click="disminuir(2)">-</button>
        <h1>numero {{numero}}</h1>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['numero'])
    },
    methods: {
        ...Vuex.mapMutations(['aumentar', 'disminuir'])
    }
});