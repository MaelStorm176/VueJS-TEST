import {randomInt} from "./fonctions.js";

let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue !'
    }
})

let app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Vous avez affiché cette page le ' + new Date().toLocaleString()
    }
})

let app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

let app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Apprendre JavaScript' },
            { text: 'Apprendre Vue' },
            { text: 'Créer quelque chose de génial' },
            { text: "Salut les amis !" }
        ]
    }
})

let app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'couc Vue !'
    }
})

// Définit un nouveau composant appelé todo-item
Vue.component('todo-item', {
    // Le composant todo-item accepte maintenant une
    // « prop » qui est comme un attribut personnalisé.
    // Cette prop est appelée todo.
    props: ['todo'],
    template: '<a class="flex">{{ todo.text }} <span class="badge">{{ todo.id }}</span></a>'
})

let app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Légumes' },
            { id: 1, text: 'Fromage' },
            { id: 2, text: 'Tout ce que les humains sont supposés manger' }
        ]
    }
})

let app8 = new Vue({
    el: '#app-8',
    data: {
        prenoms: ["Mael", "Marie", "Jean", "Virginie", "Stéphane", "Lilou", "Paul", "Pierre"],
        name: ""
    },
    methods: {
        random_name: function (){
            let id = Math.floor(Math.random() * this.prenoms.length);
            this.name = this.prenoms[id];
        }
    }
})

let app9 = new Vue({
    el: '#app-9',
    data: {
        minutes: "00",
        seconds: "01"
    },

    mounted: function () {
        setInterval(() => {
            if (this.seconds === 59){
                this.seconds = 0;
                this.minutes++;
            }else {
                this.seconds++;
            }
        }, 1000);
    }
})

let app10 = new Vue({
    el: '#app-10',
    data: {
        success: false
    },
    methods: {
        checked: function (){
            if (this.success === true){
                return 'alert alert-success'
            } else {
                return 'alert alert-danger'
            }
        }
    }
})

let app11 = new Vue({
    el: '#app-11',
    data: {
        fruits: []
    },
    mounted: function () {
        for (let i = 0; i<5;i++){
            this.fruits.push(randomFruit.roll());
        }
    },
    methods: {
        reRoll: function () {
            this.fruits.pop();
            this.fruits.unshift(randomFruit.roll());
        }
    }
})

Vue.directive('auto-complete',{
    bind: function (el, binding, vnode){
        if (binding.arg === "nom"){
            el.value = binding.value[randomInt(0,binding.value.length)];
        }else if(binding.arg === "prenom"){
            el.value = binding.value[randomInt(0,binding.value.length)];
        }else if(binding.arg === "age"){
            el.value = binding.value;
        }
    },

    update: function (el, binding, vnode, oldvnode){
        console.log("ok");
    }
})
let app12 = new Vue({
    el: '#app-12',
    data: {
        prenoms: ['Jean', 'Paul', 'Pierre', 'Marie', 'Claudette', 'Françoise', 'Luc'],
        noms: ['Olmos', 'Moulin', 'Fetard', 'Ruant', 'Dupond', 'Jarnot', 'Farnes', 'Diurnes'],
        age: randomInt(18,99)
    },
    methods: {
        refresh() {
            document.getElementById("input_prenom").value = this.prenoms[randomInt(0, this.prenoms.length)];
            document.getElementById("input_nom").value = this.noms[randomInt(0, this.noms.length)];
            document.getElementById("input_age").value = randomInt(18,99);
        }
    }
})

