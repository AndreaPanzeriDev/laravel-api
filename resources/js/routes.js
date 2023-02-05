import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//import  dei componenti che fungono da pagina
import AboutUS from './components/AboutUs.vue'


const router = new VueRouter({
    mode: 'history',
    routes : [
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUS
        },

    ]
})

export default router;
