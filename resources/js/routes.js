import Vue from 'vue'
import VueRouter from 'vue-router'

VueRouter.use(VueRouter)

//import  dei componenti che fungono da pagina
import AboutUS from './components/AboutUS.vue'

const router = VueRouter({
    mode: 'history',
    routes : [
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUS
        }
    ]
})
