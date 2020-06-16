require('./bootstrap');

window.Vue = require('vue');

Vue.component(
    'articles',
    require('./components/Articles.vue').default
);
Vue.component(
    'navbar',
    require('./components/NavBar.vue').default
);

const app = new Vue({
    el: '#app'
});