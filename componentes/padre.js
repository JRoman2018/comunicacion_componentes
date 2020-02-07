Vue.component('padre', {
    template: //html 
        `
        <div>
        <h1>numero {{$store.state.numero}}</h1>
        <hijo></hijo>
    </div>
    `
});