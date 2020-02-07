Vue.component('hijo', {
    template: //html 
        `
    <div class="py-5">
        <button @click="$store.commit('aumentar')">+</button>
        <button @click="$store.commit('disminuir')">-</button>
        <h1>numero {{$store.state.numero}}</h1>
    </div>
    `
});