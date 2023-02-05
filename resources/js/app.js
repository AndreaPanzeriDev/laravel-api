require('./bootstrap');

window.Vue = require('vue');

import App from './views/App';

import router from './routes.js'

const app = new Vue({
    el: '#root',
    router,
    render: h => h(App),
});
