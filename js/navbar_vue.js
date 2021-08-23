Vue.component('nav-bar', {
    props: ['link'],
    template: '<li><a v-bind:href=link.href>{{ link.text }}</a></li>'
});

let navbar = new Vue({
    el: '#navbar',
    data: {links: [
            {href: "index.html", text: "Accueil"},
            {href: "vuejs_bases.html", text: "Les bases"},
            {href: "vuejs_components.html", text: "Components"},
        ]}
});
